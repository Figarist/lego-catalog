/**
 * Store.js - handles data persistence and state management
 */
window.LegoStore = (function() {
    let favorites = JSON.parse(localStorage.getItem('lego_favs') || '[]');
    let builtItems = JSON.parse(localStorage.getItem('lego_built') || '[]');
    let ratings = JSON.parse(localStorage.getItem('lego_ratings') || '{}');
    let currentLang = localStorage.getItem('app_lang') || 'uk';

    function saveFavs() {
        localStorage.setItem('lego_favs', JSON.stringify(favorites));
    }

    function saveBuilt() {
        localStorage.setItem('lego_built', JSON.stringify(builtItems));
    }

    function saveRatings() {
        localStorage.setItem('lego_ratings', JSON.stringify(ratings));
    }

    return {
        getFavorites: () => favorites,
        getBuiltItems: () => builtItems,
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

        toggleBuilt: (id) => {
            const idx = builtItems.indexOf(id);
            const adding = idx === -1;
            if (adding) builtItems.push(id);
            else builtItems.splice(idx, 1);
            saveBuilt();
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
