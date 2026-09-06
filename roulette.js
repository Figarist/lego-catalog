/**
 * Roulette.js - handles the gacha-style random instruction animation
 */
window.LegoRoulette = (function() {
    let winningItem = null;
    let spinTimer = null;
    let winTimer = null;

    function cancel() {
        if (spinTimer) {
            clearTimeout(spinTimer);
            spinTimer = null;
        }
        if (winTimer) {
            clearTimeout(winTimer);
            winTimer = null;
        }
    }

    function start(config) {
        cancel();
        const { overlay, strip, actionBtn, rerollBtn, data, onWin } = config;

        overlay.classList.add('active');
        actionBtn.classList.add('hidden');
        if (rerollBtn) rerollBtn.classList.add('hidden');
        strip.style.transition = 'none';
        strip.style.transform = 'translateX(0px)';
        strip.innerHTML = '';

        const TOTAL_ITEMS = 50;
        const WINNER_INDEX = 40;
        const items = [];

        // Generate random sequence
        for (let i = 0; i < TOTAL_ITEMS; i++) {
            const randIdx = Math.floor(Math.random() * data.length);
            items.push(data[randIdx]);
        }
        
        winningItem = items[WINNER_INDEX];

        // Build DOM
        const fragment = document.createDocumentFragment();
        items.forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'roulette-card';
            card.id = 'r-card-' + idx;
            
            const localizedTitle = LegoStore.getLocalized(item.t);
            if (item.i) {
                const img = document.createElement('img');
                img.src = item.i;
                img.alt = localizedTitle;
                card.appendChild(img);
            } else {
                const noImg = document.createElement('div');
                noImg.className = 'no-img';
                noImg.textContent = '📋';
                card.appendChild(noImg);
            }
            
            const titleDiv = document.createElement('div');
            titleDiv.className = 'roulette-card-title';
            titleDiv.textContent = localizedTitle;
            card.appendChild(titleDiv);

            fragment.appendChild(card);
        });
        strip.appendChild(fragment);

        // Wait for render then spin
        spinTimer = setTimeout(() => {
            const winnerCard = document.getElementById('r-card-' + WINNER_INDEX);
            if (!winnerCard) return;
            const cardWidth = winnerCard.offsetWidth || 160;
            const rouletteWindow = document.querySelector('.roulette-window');
            const windowWidth = (rouletteWindow && rouletteWindow.offsetWidth) || 600;
            const targetOffset = winnerCard.offsetLeft;
            
            const randomJitter = Math.floor(Math.random() * 80) - 40;
            const finalTranslate = -(targetOffset - (windowWidth / 2) + (cardWidth / 2) + randomJitter);

            const duration = 7000 + Math.random() * 2000;
            strip.style.transition = `transform ${duration}ms cubic-bezier(0.15, 0.9, 0.1, 1)`;
            strip.style.transform = `translateX(${finalTranslate}px)`;

            winTimer = setTimeout(() => {
                winnerCard.classList.add('winner');
                actionBtn.classList.remove('hidden');
                if (rerollBtn) rerollBtn.classList.remove('hidden');
                if (onWin) onWin(winningItem);
            }, duration + 100);
        }, 100);
    }

    return {
        start: start,
        cancel: cancel,
        getWinningItem: () => winningItem
    };
})();
