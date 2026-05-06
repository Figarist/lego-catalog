/**
 * Roulette.js - handles the gacha-style random instruction animation
 */
window.LegoRoulette = (function() {
    let winningItem = null;

    function start(config) {
        const { overlay, strip, actionBtn, data, onWin } = config;

        overlay.classList.add('active');
        actionBtn.classList.add('hidden');
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
            
            let imgHtml = item.i ? `<img src="${item.i}" alt="">` : '<div class="no-img">📋</div>';
            card.innerHTML = `${imgHtml}<div class="roulette-card-title">${item.t}</div>`;
            fragment.appendChild(card);
        });
        strip.appendChild(fragment);

        // Wait for render then spin
        setTimeout(() => {
            const cardWidth = 160;
            const windowWidth = document.querySelector('.roulette-window').offsetWidth;
            const winnerCard = document.getElementById('r-card-' + WINNER_INDEX);
            const targetOffset = winnerCard.offsetLeft;
            
            const randomJitter = Math.floor(Math.random() * 80) - 40;
            const finalTranslate = -(targetOffset - (windowWidth / 2) + (cardWidth / 2) + randomJitter);

            const duration = 7000 + Math.random() * 2000;
            strip.style.transition = `transform ${duration}ms cubic-bezier(0.15, 0.9, 0.1, 1)`;
            strip.style.transform = `translateX(${finalTranslate}px)`;

            setTimeout(() => {
                winnerCard.classList.add('winner');
                actionBtn.classList.remove('hidden');
                if (onWin) onWin(winningItem);
            }, duration + 100);
        }, 100);
    }

    return {
        start: start,
        getWinningItem: () => winningItem
    };
})();
