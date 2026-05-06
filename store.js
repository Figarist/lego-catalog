/**
 * Store.js - handles data persistence and state management
 */
window.LegoStore = (function() {
    let favorites = JSON.parse(localStorage.getItem('lego_favs') || '[]');
    let builtItems = JSON.parse(localStorage.getItem('lego_built') || '[]');
    let ratings = JSON.parse(localStorage.getItem('lego_ratings') || '{}');
    let unlockedAchievements = JSON.parse(localStorage.getItem('lego_achievements') || '[]');
    let currentLang = localStorage.getItem('app_lang');

    // Auto-detection logic for first-time visitors
    if (!currentLang) {
        const navLang = (navigator.language || navigator.userLanguage || 'uk').toLowerCase();
        if (navLang.includes('pl')) {
            currentLang = 'pl';
        } else if (navLang.includes('en')) {
            currentLang = 'en';
        } else if (navLang.includes('ru')) {
            currentLang = 'ru';
        } else {
            currentLang = 'uk'; // Fallback/Default
        }
        localStorage.setItem('app_lang', currentLang);
    }


    function saveFavs() {
        localStorage.setItem('lego_favs', JSON.stringify(favorites));
    }

    function saveBuilt() {
        localStorage.setItem('lego_built', JSON.stringify(builtItems));
    }

    function saveRatings() {
        localStorage.setItem('lego_ratings', JSON.stringify(ratings));
    }

    function saveAchievements() {
        localStorage.setItem('lego_achievements', JSON.stringify(unlockedAchievements));
    }

    function checkAchievements(allData) {
        if (!allData) return;
        let changed = false;
        const builtCount = builtItems.length;

        for (let i = 0; i < ACHIEVEMENTS_DATA.length; i++) {
            const achievement = ACHIEVEMENTS_DATA[i];
            if (unlockedAchievements.includes(achievement.id)) continue;

            let met = false;
            if (achievement.category) {
                let count = 0;
                for (let j = 0; j < builtItems.length; j++) {
                    const item = allData.find(d => d.p === builtItems[j]);
                    if (item && item.ac && item.ac.includes(achievement.category)) {
                        count++;
                    }
                }
                if (count >= achievement.count) met = true;
            } else {
                if (builtCount >= achievement.count) met = true;
            }

            if (met) {
                unlockedAchievements.push(achievement.id);
                changed = true;
                window.dispatchEvent(new CustomEvent('achievementUnlocked', { detail: { id: achievement.id } }));
            }
        }
        if (changed) saveAchievements();
    }

    return {
        getFavorites: () => favorites,
        getBuiltItems: () => builtItems,
        getUnlockedAchievements: () => unlockedAchievements,
        getRatings: () => ratings,
        getLang: () => currentLang,

        setLang: (lang) => {
            currentLang = lang;
            localStorage.setItem('app_lang', lang);
        },

        toggleFavorite: (id) => {
            const idx = favorites.indexOf(id);
            const adding = idx === -1;
            if (adding) favorites.push(id);
            else favorites.splice(idx, 1);
            saveFavs();
            return adding;
        },

        toggleBuilt: (id, allData) => {
            const idx = builtItems.indexOf(id);
            const adding = idx === -1;
            if (adding) builtItems.push(id);
            else builtItems.splice(idx, 1);
            saveBuilt();
            if (adding) checkAchievements(allData);
            return adding;
        },

        setRating: (id, value) => {
            ratings[id] = value;
            saveRatings();
        },

        isFavorite: (id) => favorites.includes(id),
        isBuilt: (id) => builtItems.includes(id),
        getRating: (id) => ratings[id] || 0,

        // Data healing logic to match old IDs (paths) to new IDs (URLs)
        healData: (legoData) => {
            let changed = false;
            
            // Helper to get filename from path or URL
            const getSlug = (str) => {
                if (!str) return '';
                const parts = str.split('/');
                const file = parts[parts.length - 1];
                return file.split('.')[0].split('-')[0].toLowerCase(); // basic slug
            };

            const healArray = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    const oldId = arr[i];
                    // If ID not found in current data
                    if (!legoData.find(item => item.p === oldId)) {
                        const oldSlug = getSlug(oldId);
                        // Try to find by slug in current data
                        const match = legoData.find(item => getSlug(item.p) === oldSlug || getSlug(item.i) === oldSlug);
                        if (match) {
                            arr[i] = match.p;
                            changed = true;
                        }
                    }
                }
            };

            healArray(favorites);
            healArray(builtItems);

            // Heal ratings keys
            for (const oldId in ratings) {
                if (!legoData.find(item => item.p === oldId)) {
                    const oldSlug = getSlug(oldId);
                    const match = legoData.find(item => getSlug(item.p) === oldSlug || getSlug(item.i) === oldSlug);
                    if (match) {
                        ratings[match.p] = ratings[oldId];
                        delete ratings[oldId];
                        changed = true;
                    }
                }
            }

            if (changed) {
                saveFavs();
                saveBuilt();
                saveRatings();
            }
            return changed;
        }
    };
})();
