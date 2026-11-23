/**
 * Roulette.js — Arcade rAF-driven virtualized instruction drum.
 * Designed for rock-solid 60fps performance on school tablets (Android / iPad):
 * - Virtualizes a small fixed pool of 9 DOM card slots (<1600px total) to avoid
 *   mobile GPU max-texture-size limits (4096px) that freeze wide CSS strips.
 * - Uses requestAnimationFrame instead of CSS transitions so prefers-reduced-motion
 *   or slow-CPU frame batching never silently kills the spin.
 * - Dynamic center-focus scaling makes the center card noticeably larger (1.14x–1.20x).
 * - Synthesizes Web Audio API start whoosh, ticks & win fanfare (ON by default).
 */
window.LegoRoulette = (function() {
    const SOUND_PREF_KEY = 'lego_roulette_sound';
    let winningItem = null;
    let rafId = null;
    let reducedTimer = null;
    let isSpinning = false;
    let soundEnabled = (function() {
        try {
            return localStorage.getItem(SOUND_PREF_KEY) !== '0';
        } catch (_) {
            return true;
        }
    })();
    let audioCtx = null;
    let resizeHandler = null;

    const SLOT_COUNT = 9;
    const HALF_SLOTS = Math.floor(SLOT_COUNT / 2); // 4 cards on each side of center
    const TOTAL_ITEMS = 30;
    const WINNER_INDEX = 23;

    function getAudioContext() {
        if (!audioCtx) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (Ctx) {
                try {
                    audioCtx = new Ctx();
                } catch (_) {
                    audioCtx = null;
                }
            }
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume().catch(() => {});
        }
        return audioCtx;
    }

    // Call synchronously inside user click handler so mobile Safari / Android Chrome unlock audio
    function unlockAudio() {
        if (!soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
            if (ctx.state === 'suspended') ctx.resume().catch(() => {});
        } catch (_) { /* ignore */ }
    }

    function playStartWhoosh() {
        if (!soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(520, now + 0.14);

            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.16, now + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.17);
        } catch (_) { /* ignore */ }
    }

    function playTick(progress) {
        if (!soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            // Pitch rises gently during final suspenseful slow-down
            const baseFreq = 720 + Math.min(1, progress) * 340;
            osc.frequency.setValueAtTime(baseFreq, now);
            osc.frequency.exponentialRampToValueAtTime(240, now + 0.044);

            gain.gain.setValueAtTime(0.24, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.046);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
        } catch (_) { /* ignore */ }
    }

    function playWinChime() {
        if (!soundEnabled) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
            const now = ctx.currentTime;

            // Warm low punch on landing
            const bass = ctx.createOscillator();
            const bassGain = ctx.createGain();
            bass.type = 'sine';
            bass.frequency.setValueAtTime(160, now);
            bass.frequency.exponentialRampToValueAtTime(65, now + 0.16);
            bassGain.gain.setValueAtTime(0.26, now);
            bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
            bass.connect(bassGain);
            bassGain.connect(ctx.destination);
            bass.start(now);
            bass.stop(now + 0.19);

            // Bright 4-note arcade fanfare (C5 E5 G5 C6)
            const notes = [523.25, 659.25, 783.99, 1046.5];
            notes.forEach((freq, idx) => {
                const start = now + idx * 0.075;
                const isLast = idx === notes.length - 1;
                const tail = isLast ? 0.5 : 0.28;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, start);

                gain.gain.setValueAtTime(0.001, start);
                gain.gain.linearRampToValueAtTime(isLast ? 0.3 : 0.22, start + 0.015);
                gain.gain.exponentialRampToValueAtTime(0.001, start + tail);

                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(start);
                osc.stop(start + tail + 0.02);
            });
        } catch (_) { /* ignore */ }
    }

    function setSoundEnabled(enabled) {
        soundEnabled = Boolean(enabled);
        try {
            localStorage.setItem(SOUND_PREF_KEY, soundEnabled ? '1' : '0');
        } catch (_) { /* ignore */ }
        if (soundEnabled) {
            unlockAudio();
            playTick(0.6);
        }
        return soundEnabled;
    }

    function isSoundEnabled() {
        return soundEnabled;
    }

    function cancel() {
        if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
        if (reducedTimer !== null) {
            clearTimeout(reducedTimer);
            reducedTimer = null;
        }
        if (resizeHandler) {
            window.removeEventListener('resize', resizeHandler);
            resizeHandler = null;
        }
        isSpinning = false;
    }

    function buildRandomSequence(data) {
        const seq = new Array(TOTAL_ITEMS);
        const len = data.length;
        let prevIdx = -1;
        for (let i = 0; i < TOTAL_ITEMS; i++) {
            let randIdx = Math.floor(Math.random() * len);
            if (len > 1 && randIdx === prevIdx) {
                randIdx = (randIdx + 1) % len;
            }
            seq[i] = data[randIdx];
            prevIdx = randIdx;
        }
        return seq;
    }

    function preloadRange(items, from, to) {
        const start = Math.max(0, from);
        const end = Math.min(items.length - 1, to);
        for (let i = start; i <= end; i++) {
            const src = items[i] && items[i].i;
            if (src) {
                const pre = new Image();
                pre.decoding = 'async';
                pre.src = src;
            }
        }
    }

    function createSlotElement() {
        const card = document.createElement('div');
        card.className = 'roulette-card';

        const mediaWrap = document.createElement('div');
        mediaWrap.className = 'roulette-card-media';

        const img = document.createElement('img');
        img.decoding = 'async';
        img.draggable = false;

        const noImg = document.createElement('div');
        noImg.className = 'no-img hidden';
        noImg.textContent = '📋';

        img.onerror = function() {
            img.classList.add('hidden');
            noImg.classList.remove('hidden');
        };

        mediaWrap.appendChild(img);
        mediaWrap.appendChild(noImg);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'roulette-card-title';

        card.appendChild(mediaWrap);
        card.appendChild(titleDiv);

        return {
            el: card,
            img: img,
            noImg: noImg,
            titleEl: titleDiv,
            boundIdx: -1
        };
    }

    function bindSlot(slot, item, idx) {
        if (slot.boundIdx === idx) return;
        slot.boundIdx = idx;

        const localizedTitle = LegoStore.getLocalized(item.t);
        slot.titleEl.textContent = localizedTitle;
        slot.el.dataset.seqIdx = String(idx);

        if (item.i) {
            slot.img.alt = localizedTitle;
            slot.img.classList.remove('hidden');
            slot.noImg.classList.add('hidden');
            if (slot.img.getAttribute('src') !== item.i) {
                slot.img.src = item.i;
            }
        } else {
            slot.img.removeAttribute('src');
            slot.img.classList.add('hidden');
            slot.noImg.classList.remove('hidden');
        }
    }

    function easeArcadeOut(t) {
        if (t <= 0) return 0;
        if (t >= 1) return 1;
        return 1 - Math.pow(1 - t, 2.5);
    }

    function easeOutBack(t) {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }

    function start(config) {
        cancel();
        unlockAudio();

        const {
            overlay,
            modal,
            strip,
            windowEl,
            pointerEl,
            statusEl,
            resultEl,
            actionBtn,
            rerollBtn,
            data,
            getCategoryLabel,
            t,
            onWin
        } = config;

        if (!data || !data.length) return;

        isSpinning = true;
        overlay.classList.add('active');
        if (modal) {
            modal.classList.add('is-spinning');
            modal.classList.remove('is-won', 'is-impact');
        }
        actionBtn.classList.add('hidden');
        if (rerollBtn) rerollBtn.classList.add('hidden');
        if (resultEl) {
            resultEl.classList.add('hidden');
            resultEl.innerHTML = '';
        }
        if (statusEl) {
            statusEl.classList.remove('hidden');
            statusEl.textContent = (t && t('roulette_spinning')) || 'Крутимо барабан...';
        }
        if (pointerEl) {
            pointerEl.style.transform = 'translateX(-50%) rotate(0deg)';
        }

        const items = buildRandomSequence(data);
        winningItem = items[WINNER_INDEX];
        preloadRange(items, 0, 12);
        preloadRange(items, WINNER_INDEX - 5, WINNER_INDEX + 5);

        strip.innerHTML = '';
        strip.style.transition = 'none';
        strip.style.transform = 'none';

        const slots = [];
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < SLOT_COUNT; i++) {
            const slot = createSlotElement();
            slots.push(slot);
            fragment.appendChild(slot.el);
        }
        strip.appendChild(fragment);

        const rouletteWindow = windowEl || document.querySelector('.roulette-window');
        const prefersReduced = Boolean(
            window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
        );

        function getGeometry() {
            const winW = (rouletteWindow && rouletteWindow.clientWidth) || 640;
            const isCompact = winW < 520;
            const cardW = isCompact ? 132 : 160;
            const gap = isCompact ? 20 : 24;
            return { winW, cardW, gap, pitch: cardW + gap };
        }

        function renderAt(pos, highlightWinner) {
            const { winW, cardW, pitch } = getGeometry();
            const centerX = winW / 2;
            const centerIdx = Math.round(pos / pitch);

            for (let s = 0; s < SLOT_COUNT; s++) {
                const seqIdx = centerIdx - HALF_SLOTS + s;
                const slot = slots[s];

                if (seqIdx < 0 || seqIdx >= TOTAL_ITEMS) {
                    slot.el.style.visibility = 'hidden';
                    continue;
                }

                slot.el.style.visibility = 'visible';
                slot.el.style.width = cardW + 'px';
                bindSlot(slot, items[seqIdx], seqIdx);

                const offsetUnits = (seqIdx * pitch - pos) / pitch;
                const dist = Math.abs(offsetUnits);

                // Smooth bell-curve focus: center card stands out clearly bigger
                const focus = Math.max(0, 1 - dist / 1.45);
                const smoothFocus = focus * focus * (3 - 2 * focus);
                const isCenter = seqIdx === centerIdx;
                const isWinnerCard = Boolean(highlightWinner && seqIdx === WINNER_INDEX);

                const scale = isWinnerCard
                    ? 1.2
                    : (0.86 + smoothFocus * 0.28); // 0.86 edge -> 1.14 center
                const liftY = isWinnerCard ? -6 : Math.round(-smoothFocus * 4);
                const x = Math.round(centerX + (seqIdx * pitch - pos) - cardW / 2);

                slot.el.style.transform = `translate3d(${x}px, ${liftY}px, 0) scale(${scale.toFixed(3)})`;
                slot.el.style.opacity = isWinnerCard ? '1' : Math.max(0.55, 1 - dist * 0.14).toFixed(2);
                slot.el.style.zIndex = isWinnerCard ? '30' : String(Math.max(1, Math.round(20 - dist * 4)));

                slot.el.classList.toggle('is-center', isCenter && !highlightWinner);
                slot.el.classList.toggle('winner', isWinnerCard);
            }

            return centerIdx;
        }

        function finishWin() {
            isSpinning = false;
            if (modal) {
                modal.classList.remove('is-spinning');
                modal.classList.add('is-won');
                void modal.offsetWidth;
                modal.classList.add('is-impact');
            }
            if (pointerEl) {
                pointerEl.style.transform = 'translateX(-50%) rotate(0deg)';
            }

            renderAt(WINNER_INDEX * getGeometry().pitch, true);
            resizeHandler = () => {
                if (!isSpinning) renderAt(WINNER_INDEX * getGeometry().pitch, true);
            };
            window.addEventListener('resize', resizeHandler);
            playWinChime();

            if (statusEl) statusEl.classList.add('hidden');
            if (resultEl && winningItem) {
                const titleText = LegoStore.getLocalized(winningItem.t);
                const catText = getCategoryLabel ? getCategoryLabel(winningItem.c) : (winningItem.c || '');
                const labelText = (t && t('roulette_winner_label')) || '🎉 Твоя наступна модель:';
                resultEl.innerHTML = '';

                const labelSpan = document.createElement('span');
                labelSpan.className = 'roulette-result-label';
                labelSpan.textContent = labelText;

                const nameRow = document.createElement('div');
                nameRow.className = 'roulette-result-row';

                const titleStrong = document.createElement('strong');
                titleStrong.className = 'roulette-result-title';
                titleStrong.textContent = titleText;
                nameRow.appendChild(titleStrong);

                if (catText) {
                    const catPill = document.createElement('span');
                    catPill.className = 'roulette-result-cat';
                    catPill.textContent = catText;
                    nameRow.appendChild(catPill);
                }

                resultEl.appendChild(labelSpan);
                resultEl.appendChild(nameRow);
                resultEl.classList.remove('hidden');
            }

            actionBtn.classList.remove('hidden');
            if (rerollBtn) rerollBtn.classList.remove('hidden');
            if (onWin) onWin(winningItem);
        }

        // Accessible fallback for tablets with "Reduce / Remove animations" enabled:
        if (prefersReduced) {
            const previewIndices = [
                WINNER_INDEX - 5,
                WINNER_INDEX - 4,
                WINNER_INDEX - 3,
                WINNER_INDEX - 2,
                WINNER_INDEX - 1,
                WINNER_INDEX
            ];
            let step = 0;
            function nextStep() {
                if (!isSpinning) return;
                const idx = previewIndices[step];
                const { pitch } = getGeometry();
                renderAt(idx * pitch, false);
                if (statusEl && items[idx]) {
                    statusEl.textContent = LegoStore.getLocalized(items[idx].t);
                }
                playTick(step / previewIndices.length);
                step++;
                if (step < previewIndices.length) {
                    reducedTimer = setTimeout(nextStep, 170);
                } else {
                    reducedTimer = setTimeout(finishWin, 160);
                }
            }
            nextStep();
            return;
        }

        // Full rAF arcade drum physics (comfortable, non-strobing ~2x slower card speed):
        // 1) 180ms anticipation pull-back -> 2) 8-9.5s smooth spin -> 3) 340ms elastic center snap
        const anticipationMs = 180;
        const spinDuration = 8000 + Math.random() * 1500;
        const settleDuration = 320;
        const jitterRatio = (Math.random() * 0.6) - 0.3;

        const initGeom = getGeometry();
        let startTime = null;
        let lastTickIndex = 2;
        let pointerAngle = 0;

        playStartWhoosh();
        renderAt(2 * initGeom.pitch, false);

        function tick(now) {
            if (!isSpinning) return;
            if (startTime === null) startTime = now;

            const elapsed = now - startTime;
            const { pitch, cardW } = getGeometry();
            const currentStart = 2 * pitch;
            const pullbackPos = currentStart - cardW * 0.34;
            const exactWinnerPos = WINNER_INDEX * pitch;
            const landingPos = exactWinnerPos + jitterRatio * cardW;

            if (elapsed < anticipationMs) {
                const aT = elapsed / anticipationMs;
                const smoothPull = Math.sin(aT * Math.PI * 0.5);
                const pos = currentStart + (pullbackPos - currentStart) * smoothPull;
                renderAt(pos, false);

                if (pointerEl) {
                    pointerAngle = 8 * smoothPull;
                    pointerEl.style.transform = `translateX(-50%) rotate(${pointerAngle.toFixed(2)}deg)`;
                }

                rafId = requestAnimationFrame(tick);
            } else if (elapsed < anticipationMs + spinDuration) {
                const spinElapsed = elapsed - anticipationMs;
                const progress = spinElapsed / spinDuration;
                const eased = easeArcadeOut(progress);
                const pos = pullbackPos + (landingPos - pullbackPos) * eased;

                const centerIdx = renderAt(pos, false);

                if (centerIdx !== lastTickIndex) {
                    const cardsCrossed = Math.abs(centerIdx - lastTickIndex);
                    lastTickIndex = centerIdx;
                    const kick = Math.min(28, 12 + cardsCrossed * 6 + (1 - progress) * 10);
                    pointerAngle = -kick;
                    playTick(progress);

                    if (statusEl && items[centerIdx]) {
                        statusEl.textContent = LegoStore.getLocalized(items[centerIdx].t);
                    }
                }

                pointerAngle *= 0.78;
                if (Math.abs(pointerAngle) < 0.25) pointerAngle = 0;
                if (pointerEl) {
                    const bounceY = Math.min(3, Math.abs(pointerAngle) * 0.12);
                    pointerEl.style.transform = `translateX(-50%) translateY(${bounceY.toFixed(1)}px) rotate(${pointerAngle.toFixed(2)}deg)`;
                }

                rafId = requestAnimationFrame(tick);
            } else if (elapsed < anticipationMs + spinDuration + settleDuration) {
                const settleT = (elapsed - anticipationMs - spinDuration) / settleDuration;
                const back = easeOutBack(settleT);
                const pos = landingPos + (exactWinnerPos - landingPos) * back;
                renderAt(pos, false);

                pointerAngle *= 0.7;
                if (pointerEl) {
                    pointerEl.style.transform = `translateX(-50%) rotate(${pointerAngle.toFixed(2)}deg)`;
                }

                rafId = requestAnimationFrame(tick);
            } else {
                rafId = null;
                finishWin();
            }
        }

        rafId = requestAnimationFrame(tick);
    }

    return {
        start: start,
        cancel: cancel,
        unlockAudio: unlockAudio,
        setSoundEnabled: setSoundEnabled,
        isSoundEnabled: isSoundEnabled,
        getWinningItem: () => winningItem
    };
})();
