// Disclaimer check
(function() {
  const accepted = localStorage.getItem('lego_disclaimer_ok');
  const overlay = document.getElementById('disclaimerOverlay');
  if (accepted) {
    overlay.classList.add('hidden');
  } else {
    document.body.style.overflow = 'hidden';
    document.getElementById('disclaimerAccept').addEventListener('click', function() {
      localStorage.setItem('lego_disclaimer_ok', '1');
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
})();

// Utility: Debounce
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Utility: Escape HTML to prevent XSS
function escapeHTML(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Category key constants (avoid hardcoded Ukrainian strings in logic)
const CAT_KEY_NEW = 'Нові інструкції';
const CAT_KEY_OFFICIAL = 'Офіційні інструкції LEGO';

document.addEventListener('DOMContentLoaded', () => {
  const $ = id => document.getElementById(id);
  const t = key => (I18N_DATA[LegoStore.getLang()] && I18N_DATA[LegoStore.getLang()][key]) || key;
  const gridView = $('gridView');
  const homeView = $('homeView');
  const trendingGrid = $('trendingGrid');
  const genreGrid = $('genreGrid');
  const recommendedGrid = $('recommendedGrid');
  const grid = $('grid');
  const catList = $('categoryList');
  const searchInput = $('searchInput');
  const clearBtn = $('clearSearch');
  const titleEl = $('currentTitle');
  const emptyEl = $('empty');
  const builtCountEl = $('builtCount');
  const totalEl = $('totalCount');
  const btnGrid = $('btnGrid');

  const scrollBtn = $('scrollTop');
  const contentEl = $('content');

  // Modal elements
  const modalOverlay = $('modalOverlay');
  const modalImg = $('modalImg');
  const modalTitle = $('modalTitle');
  const modalCats = $('modalCats');
  const modalOpenBtn = $('modalOpenBtn');
  const modalClose = $('modalClose');

  // Roulette elements
  const btnRandom = $('btnRandom');
  const rouletteOverlay = $('rouletteOverlay');
  const rouletteClose = $('rouletteClose');
  const rouletteStrip = $('rouletteStrip');
  const rouletteActionBtn = $('rouletteActionBtn');
  let rouletteWinningItem = null;

  const navFav = $('navFav');
  const navFavCount = $('navFavCount');
  const navBuilt = $('navBuilt');

  let activeCat = 'home';
  let query = '';

  // --- SW Update Toast ---
  function showUpdateToast(reg) {
    const toast = document.createElement('div');
    toast.className = 'update-toast';
    toast.innerHTML = `
      <div class="toast-content">
        <span>${t('toast_update_text')}</span>
        <button id="updateNow">${t('toast_update_btn')}</button>
      </div>
    `;
    document.body.appendChild(toast);

    document.getElementById('updateNow').addEventListener('click', () => {
      if (reg.waiting) {
        reg.waiting.postMessage('SKIP_WAITING');
      }
      toast.remove();
    });
  }

  function registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then(reg => {
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateToast(reg);
            }
          });
        });
      });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }
  registerSW();

  // Achievement Toast
  window.addEventListener('achievementUnlocked', (e) => {
    showAchievementToast(e.detail.id);
  });

  function showAchievementToast(id) {
    const lang = LegoStore.getLang();
    const ach = ACHIEVEMENTS_DATA.find(a => a.id === id);
    if (!ach) return;
    
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
      <div class="ach-icon">${ach.icon}</div>
      <div class="ach-text">
        <div class="ach-label">${t('achievement_unlocked')}</div>
        <div class="ach-title">${I18N_ACHIEVEMENTS[lang][id + '_title']}</div>
      </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('out');
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  }

  function renderAchievementsGrid() {
    const unlocked = LegoStore.getUnlockedAchievements();
    const lang = LegoStore.getLang();
    const container = document.createElement('div');
    container.className = 'badges-container';
    container.innerHTML = `<h2 class="badges-header">${t('my_badges')}</h2>`;
    
    const bGrid = document.createElement('div');
    bGrid.className = 'badges-grid';
    
    ACHIEVEMENTS_DATA.forEach(ach => {
      const isUnlocked = unlocked.includes(ach.id);
      const achI18n = I18N_ACHIEVEMENTS[lang];
      const badge = document.createElement('div');
      badge.className = 'badge-item' + (isUnlocked ? ' unlocked' : ' locked');
      badge.innerHTML = `
        <div class="badge-emoji">${ach.icon}${isUnlocked ? '' : '<span class="lock">🔒</span>'}</div>
        <div class="badge-meta">
          <div class="badge-title">${achI18n[ach.id + '_title']}</div>
          <div class="badge-desc">${achI18n[ach.id + '_desc']}</div>
        </div>
      `;
      bGrid.appendChild(badge);
    });
    
    container.appendChild(bGrid);
    return container;
  }

  function getLocalized(val) {
    return LegoStore.getLocalized(val);
  }


  function getLocalizedCat(cat) {
    const lang = LegoStore.getLang();
    return (CATEGORY_MAP[cat] && CATEGORY_MAP[cat][lang]) || cat;
  }

  function updateGlobalUI() {
    if (navFavCount) navFavCount.textContent = LegoStore.getFavorites().length;
    if (navFav) navFav.classList.toggle('has-items', LegoStore.getFavorites().length > 0);
    if (builtCountEl) builtCountEl.textContent = LegoStore.getBuiltItems().length;
    if (navBuilt) navBuilt.classList.toggle('has-items', LegoStore.getBuiltItems().length > 0);
  }

  function updateUI() {
    const lang = LegoStore.getLang();
    document.documentElement.lang = lang;

    // SEO and Browser Tab Title
    if (I18N_DATA[lang]) {
      if (window.location.pathname.includes('legal.html')) {
        if (I18N_DATA[lang].legal_page_title) document.title = I18N_DATA[lang].legal_page_title;
      } else {
        if (I18N_DATA[lang].app_page_title) document.title = I18N_DATA[lang].app_page_title;
      }
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && I18N_DATA[lang].app_meta_desc) {
        metaDesc.content = I18N_DATA[lang].app_meta_desc;
      }
    }

    // Static text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (I18N_DATA[lang] && I18N_DATA[lang][key]) {
        if (el.tagName === 'INPUT') el.placeholder = I18N_DATA[lang][key];
        else el.textContent = I18N_DATA[lang][key];
      }
    });

    // Aria Labels and Titles (tooltips)
    document.querySelectorAll('[aria-label]').forEach(el => {
      if (el.id === 'clearSearch') el.setAttribute('aria-label', t('aria_clear'));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      if (I18N_DATA[lang] && I18N_DATA[lang][key]) {
        el.title = I18N_DATA[lang][key];
      }
    });

    // Localized aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (I18N_DATA[lang] && I18N_DATA[lang][key]) {
        el.setAttribute('aria-label', I18N_DATA[lang][key]);
      }
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Refresh dynamic content
    rebuildSearchIndex();
    renderCategories();
    if (activeCat === 'home') renderHome();
    else switchView(activeCat, '', ''); // refresh current view
  }

  // Lang Switcher Listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      LegoStore.setLang(btn.dataset.lang);
      updateUI();
    });
  });

  function updateCardUI(id) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (card.dataset.id === id) {
        // Update Built Badge
        let badge = card.querySelector('.built-badge');
        const isBuilt = LegoStore.isBuilt(id);
        if (isBuilt && !badge) {
          badge = document.createElement('div');
          badge.className = 'built-badge';
          badge.innerHTML = I18N_DATA[LegoStore.getLang()].built_badge;
          card.appendChild(badge);
        } else if (!isBuilt && badge) {
          badge.remove();
        }

        // Update Rating
        let ratingTag = card.querySelector('.card-rating');
        const val = LegoStore.getRating(id);
        if (val && !ratingTag) {
          ratingTag = document.createElement('div');
          ratingTag.className = 'card-rating';
          card.appendChild(ratingTag);
        }
        if (val) {
          ratingTag.innerHTML = '★ ' + val;
        } else if (ratingTag) {
          ratingTag.remove();
        }

        // Update Heart
        const heart = card.querySelector('.fav-btn');
        if (heart) heart.classList.toggle('active', LegoStore.isFavorite(id));
      }
    });
  }

  function handleToggleBuilt(id) {
    LegoStore.toggleBuilt(id, LEGO_DATA);
    updateGlobalUI();
    updateCardUI(id);
  }

  function handleToggleFavorite(id, event) {
    const adding = LegoStore.toggleFavorite(id);
    if (adding && event) animateFlyingHeart(event.currentTarget);
    updateGlobalUI();
    if (activeCat === 'favorites') renderGrid();
    else updateCardUI(id);
  }

  function handleSetRating(id, val) {
    LegoStore.setRating(id, val);
    updateCardUI(id);
  }

  function animateFlyingHeart(startEl) {
    const startRect = startEl.getBoundingClientRect();
    const targetEl = $('navFav');
    if (!targetEl) return;
    const endRect = targetEl.getBoundingClientRect();

    const flyer = document.createElement('div');
    flyer.className = 'flying-heart';
    flyer.textContent = '❤️';
    flyer.style.left = startRect.left + 'px';
    flyer.style.top = startRect.top + 'px';
    document.body.appendChild(flyer);

    // Force reflow
    flyer.offsetWidth;

    flyer.style.left = (endRect.left + endRect.width/2 - 10) + 'px';
    flyer.style.top = (endRect.top + endRect.height/2 - 10) + 'px';
    flyer.style.transform = 'scale(1.5) rotate(15deg)';
    flyer.style.opacity = '0';

    setTimeout(() => {
      flyer.remove();
      targetEl.classList.add('pulse');
      setTimeout(() => targetEl.classList.remove('pulse'), 800);
    }, 1200);
  }

  // Build category counts
  const catCounts = {};
  LEGO_DATA.forEach(item => {
    item.ac.forEach(c => { catCounts[c] = (catCounts[c] || 0) + 1; });
  });
  const sortedCats = Object.keys(catCounts).sort((a, b) => a.localeCompare(b, 'uk'));

  totalEl.textContent = LEGO_DATA.length;

  // Pre-built search index for fast filtering
  let searchIndex = [];
  function rebuildSearchIndex() {
    searchIndex = LEGO_DATA.map(item => {
      const title = getLocalized(item.t).toLowerCase();
      const cat = getLocalizedCat(item.c).toLowerCase();
      const allCats = item.ac.map(a => getLocalizedCat(a).toLowerCase()).join(' ');
      return title + ' ' + cat + ' ' + allCats;
    });
  }
  rebuildSearchIndex();

  // Render categories in sidebar
  function renderCategories() {
    catList.innerHTML = '';
    
    // 1. Home
    const homeLi = makeCatItem('home', t('sidebar_home').replace('🏠 ', ''), '', '🏠');
    homeLi.classList.add('home-item');
    catList.appendChild(homeLi);
    
    // 2. New
    if (catCounts[CAT_KEY_NEW]) {
      catList.appendChild(makeCatItem(CAT_KEY_NEW, t('sidebar_new').replace('🆕 ', ''), catCounts[CAT_KEY_NEW], '🆕'));
    }

    // 3. Official
    if (catCounts[CAT_KEY_OFFICIAL]) {
      catList.appendChild(makeCatItem(CAT_KEY_OFFICIAL, t('sidebar_official').replace('📋 ', ''), catCounts[CAT_KEY_OFFICIAL], '📋'));
    }

    // 4. All
    catList.appendChild(makeCatItem('all', t('sidebar_all').replace('🎯 ', ''), LEGO_DATA.length, '🎯'));

    // 5. Rest
    sortedCats.forEach(cat => {
      if (cat === CAT_KEY_NEW || cat === CAT_KEY_OFFICIAL) return; // Skip pinned
      const emoji = CATEGORY_EMOJI[cat] || '📁';
      catList.appendChild(makeCatItem(cat, getLocalizedCat(cat), catCounts[cat], emoji));
    });
    
    const favCount = LegoStore.getFavorites().length;
    if (navFavCount) navFavCount.textContent = favCount;
    if (navFav) navFav.classList.toggle('has-items', favCount > 0);
    updateGlobalUI();
  }

  function makeCatItem(key, label, count, emoji) {
    const li = document.createElement('li');
    li.className = 'cat-item' + (activeCat === key ? ' active' : '');
    li.dataset.key = key; // Add key for precise active tracking
    const countHtml = count !== '' ? '<span class="cnt">' + count + '</span>' : '';
    li.innerHTML = '<span><span class="emoji">' + emoji + '</span>' + label + '</span>' + countHtml;
    li.addEventListener('click', () => {
      switchView(key, label, emoji);
    });
    return li;
  }

  function switchView(key, label, emoji) {
    activeCat = key;
    query = ''; searchInput.value = ''; clearBtn.classList.add('hidden');
    
    document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
    const activeItem = document.querySelector(`.cat-item[data-key="${key}"]`);
    if (activeItem) activeItem.classList.add('active');

    if (key === 'home') {
      homeView.classList.remove('hidden');
      gridView.classList.add('hidden');
      renderHome();
    } else {
      homeView.classList.add('hidden');
      gridView.classList.remove('hidden');
      
      let viewTitle = '';
      if (key === 'all') viewTitle = t('view_all');
      else if (key === 'favorites') viewTitle = t('view_favorites');
      else if (key === 'built') viewTitle = t('view_built');
      else viewTitle = (emoji ? emoji + ' ' : '') + getLocalizedCat(label);
      
      titleEl.textContent = viewTitle;
      renderGrid();
    }
    if (window.innerWidth <= 900) contentEl.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Header Fav click
  if (navFav) {
    navFav.addEventListener('click', () => {
      switchView('favorites', t('view_favorites'), '❤️');
    });
  }

  if (navBuilt) {
    navBuilt.addEventListener('click', () => {
      switchView('built', t('view_built'), '✅');
    });
  }

  // Render Home Hub
  function renderHome() {
    // Trending: Random 8 items
    const trending = [...LEGO_DATA].sort(() => 0.5 - Math.random()).slice(0, 8);
    renderSimpleGrid(trendingGrid, trending, true);

    // Genres: Top 8 categories by count
    const topCats = [...sortedCats].sort((a, b) => catCounts[b] - catCounts[a]).slice(0, 8);
    genreGrid.innerHTML = '';
    topCats.forEach(cat => {
      const div = document.createElement('div');
      div.className = 'genre-card';
      const emoji = CATEGORY_EMOJI[cat] || '📁';
      const catTitle = getLocalizedCat(cat);
      div.innerHTML = `<div class="genre-emoji">${emoji}</div><div class="genre-name">${catTitle}</div><div class="genre-count">${catCounts[cat]} ${I18N_DATA[LegoStore.getLang()].models_count}</div>`;
      div.addEventListener('click', () => switchView(cat, cat, emoji));
      genreGrid.appendChild(div);
    });

    // Recommended: Random 10 items (roughly 2 rows)
    const recommended = [...LEGO_DATA].sort(() => 0.5 - Math.random()).slice(0, 10);
    renderSimpleGrid(recommendedGrid, recommended);
  }

  function renderSimpleGrid(container, items, isTrending = false) {
    container.innerHTML = '';
    items.forEach((item, i) => {
      const card = createCard(item, i);
      if (isTrending) {
        const trendBadge = document.createElement('div');
        trendBadge.className = 'trend-badge';
        trendBadge.textContent = I18N_DATA[LegoStore.getLang()].trend_badge;
        card.appendChild(trendBadge);
      }
      container.appendChild(card);
    });
  }

  function createCard(item, i) {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.id = item.p; // Using path as unique ID
    div.style.animationDelay = Math.min(i * 25, 500) + 'ms';
    
    // Heart Button
    const favBtn = document.createElement('button');
    favBtn.className = 'fav-btn' + (LegoStore.isFavorite(item.p) ? ' active' : '');
    favBtn.innerHTML = '❤️';
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleToggleFavorite(item.p, e);
    });
    div.appendChild(favBtn);

    // Built Badge
    if (LegoStore.isBuilt(item.p)) {
      const badge = document.createElement('div');
      badge.className = 'built-badge';
      badge.innerHTML = I18N_DATA[LegoStore.getLang()].built_badge;
      div.appendChild(badge);
    }

    // Rating Badge
    if (LegoStore.getRating(item.p)) {
      const rBadge = document.createElement('div');
      rBadge.className = 'card-rating';
      rBadge.innerHTML = '★ ' + LegoStore.getRating(item.p);
      div.appendChild(rBadge);
    }

    // NEW Badge
    if (item.ac.includes(CAT_KEY_NEW)) {
      const newBadge = document.createElement('div');
      newBadge.className = 'new-badge';
      newBadge.textContent = 'NEW';
      div.appendChild(newBadge);
    }

    div.addEventListener('click', () => openModal(item));

    const imgDiv = document.createElement('div');
    imgDiv.className = 'card-img';
    if (item.i) {
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.alt = getLocalized(item.t);
      img.src = item.i;
      img.onerror = function() {
        this.parentElement.innerHTML = `<div class="no-img"><span class="no-img-icon">📋</span>${t('label_instruction')}</div>`;
      };
      imgDiv.appendChild(img);
    } else {
      imgDiv.innerHTML = `<div class="no-img"><span class="no-img-icon">📋</span>${t('label_official')}</div>`;
    }

    const badge = document.createElement('div');
    badge.className = 'play-badge';
    badge.textContent = '▶';
    div.appendChild(badge);

    const body = document.createElement('div');
    body.className = 'card-body';
    const titleText = getLocalized(item.t);
    const catText = getLocalizedCat(item.c);
    body.innerHTML = `<div class="card-title" title="${escapeHTML(titleText)}">${escapeHTML(titleText)}</div><div class="card-cat">${escapeHTML(catText)}</div>`;

    div.appendChild(imgDiv);
    div.appendChild(body);
    return div;
  }

  // Filter
  function getFiltered() {
    if (!query) {
      return LEGO_DATA.filter(item => {
        if (activeCat === 'all' || activeCat === 'home') return true;
        if (activeCat === 'favorites') return LegoStore.isFavorite(item.p);
        if (activeCat === 'built') return LegoStore.isBuilt(item.p);
        return item.ac.includes(activeCat);
      });
    }

    // Use pre-built search index for fast matching
    return LEGO_DATA.filter((item, idx) => {
      const matchQ = searchIndex[idx].includes(query);
      
      if (activeCat === 'favorites') return matchQ && LegoStore.isFavorite(item.p);
      if (activeCat === 'built') return matchQ && LegoStore.isBuilt(item.p);
      return matchQ;
    });
  }

  // Render grid for specific category or search
  function renderGrid() {
    const items = getFiltered();
    grid.innerHTML = '';

    if (items.length === 0 && activeCat !== 'built') {
      emptyEl.classList.remove('hidden');
      return;
    }
    emptyEl.classList.add('hidden');

    const fragment = document.createDocumentFragment();
    if (activeCat === 'built') {
      fragment.appendChild(renderAchievementsGrid());
    }

    items.forEach((item, i) => {
      fragment.appendChild(createCard(item, i));
    });
    grid.appendChild(fragment);
  }

  // === MODAL ===
  function openModal(item) {
    const lang = LegoStore.getLang();
    if (item.i) {
      modalImg.innerHTML = `<img src="${escapeHTML(item.i)}" alt="${escapeHTML(getLocalized(item.t))}">`;
    } else {
      modalImg.innerHTML = `<div class="no-img"><span class="no-img-icon">📋</span><br>${escapeHTML(t('label_official_full'))}</div>`;
    }
    modalTitle.textContent = getLocalized(item.t);
    modalCats.innerHTML = '';
    item.ac.forEach(cat => {
      const catEmoji = CATEGORY_EMOJI[cat] || '📁';
      const tag = document.createElement('span');
      tag.className = 'modal-cat-tag';
      tag.textContent = catEmoji + ' ' + getLocalizedCat(cat);
      modalCats.appendChild(tag);
    });

    // Add Heart to Modal
    const modalFavBtn = document.createElement('button');
    modalFavBtn.className = 'modal-fav-btn' + (LegoStore.isFavorite(item.p) ? ' active' : '');
    const isFav = LegoStore.isFavorite(item.p);
    modalFavBtn.innerHTML = '<span>❤️</span> ' + (isFav ? I18N_DATA[lang].view_favorites : I18N_DATA[lang].nav_favorites);
    
    modalFavBtn.onclick = (e) => {
      handleToggleFavorite(item.p, e);
      const nowFav = LegoStore.isFavorite(item.p);
      modalFavBtn.classList.toggle('active', nowFav);
      modalFavBtn.innerHTML = '<span>❤️</span> ' + (nowFav ? I18N_DATA[lang].view_favorites : I18N_DATA[lang].nav_favorites);
    };
    modalCats.appendChild(modalFavBtn);

    // Add Share to Modal
    const modalShareBtn = document.createElement('button');
    modalShareBtn.className = 'modal-share-btn';
    modalShareBtn.innerHTML = `<span>🔗</span> ${t('btn_share')}`;
    modalShareBtn.onclick = () => handleShare(item);
    modalCats.appendChild(modalShareBtn);

    modalOpenBtn.href = item.p;

    // Built toggle in modal
    const modalBuiltInput = $('modalBuilt');
    modalBuiltInput.checked = LegoStore.isBuilt(item.p);
    modalBuiltInput.onclick = () => {
      handleToggleBuilt(item.p);
    };

    // Rating in modal
    const stars = document.querySelectorAll('#modalRating .star');
    const currentRating = LegoStore.getRating(item.p);
    
    function renderStars(val) {
      stars.forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.value) <= val);
      });
    }
    renderStars(currentRating);

    stars.forEach(star => {
      star.onclick = () => {
        const val = parseInt(star.dataset.value);
        handleSetRating(item.p, val);
        renderStars(val);
      };
    });

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus trap: focus the close button when modal opens
    setTimeout(() => modalClose.focus(), 100);
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Focus trap for modal
  const modal = $('modal');
  modal.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      // Also close roulette
      rouletteOverlay.classList.remove('active');
    }
  });

  // Search
  // Search with Debounce
  searchInput.addEventListener('input', debounce(e => {
    query = e.target.value.toLowerCase().trim();
    if (query) {
      if (activeCat === 'home') {
        homeView.classList.add('hidden');
        gridView.classList.remove('hidden');
      }
      clearBtn.classList.remove('hidden');
      renderGrid();
    } else {
      clearBtn.classList.add('hidden');
      if (activeCat === 'home') {
        homeView.classList.remove('hidden');
        gridView.classList.add('hidden');
        renderHome();
      } else {
        renderGrid();
      }
    }
  }, 300));
  clearBtn.addEventListener('click', () => {
    query = ''; searchInput.value = ''; clearBtn.classList.add('hidden');
    if (activeCat === 'home') {
      homeView.classList.remove('hidden');
      gridView.classList.add('hidden');
      renderHome();
    } else {
      renderGrid();
    }
  });

  // View toggle
  const btnBig = $('btnBig');
  btnGrid.addEventListener('click', () => {
    btnGrid.classList.add('active');
    btnBig.classList.remove('active');
    grid.classList.remove('big-tiles');
  });
  if (btnBig) {
    btnBig.addEventListener('click', () => {
      btnBig.classList.add('active');
      btnGrid.classList.remove('active');
      grid.classList.add('big-tiles');
    });
  }

  // Scroll top
  const handleScroll = () => {
    const scrolled = activeCat === 'home' ? window.scrollY : contentEl.scrollTop;
    scrollBtn.classList.toggle('hidden', scrolled < 400);
  };
  contentEl.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', handleScroll);
  scrollBtn.addEventListener('click', () => {
    contentEl.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Logo click = reset to home
  $('logoHome').addEventListener('click', () => {
    switchView('home', t('sidebar_home'), '🏠');
  });

  // Init
  LegoStore.healData(LEGO_DATA);
  updateUI();
  initDragScroll();

  // === ROULETTE LOGIC ===
  if (btnRandom) {
    btnRandom.addEventListener('click', () => {
      LegoRoulette.start({
        overlay: rouletteOverlay,
        strip: rouletteStrip,
        actionBtn: rouletteActionBtn,
        data: LEGO_DATA,
        onWin: (item) => {
          rouletteWinningItem = item;
        }
      });
    });
  }

  if (rouletteClose) {
    rouletteClose.addEventListener('click', () => {
      rouletteOverlay.classList.remove('active');
    });
  }

  if (rouletteActionBtn) {
    rouletteActionBtn.addEventListener('click', () => {
      rouletteOverlay.classList.remove('active');
      if (rouletteWinningItem) openModal(rouletteWinningItem);
    });
  }

  // --- Share Logic ---
  async function handleShare(item) {
    const shareData = {
      title: getLocalized(item.t),
      text: `${getLocalized(item.t)} - LEGO WeDo 2.0 Catalog`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      // Fallback: Copy to clipboard (modern API)
      try {
        await navigator.clipboard.writeText(shareData.url);
      } catch (e) {
        // Legacy fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = shareData.url;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      // Show localized toast instead of alert()
      const toast = document.createElement('div');
      toast.className = 'update-toast';
      toast.innerHTML = `<div class="toast-content"><span>📋 ${t('link_copied')}</span></div>`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }
  }
});

// Horizontal scroll helper for buttons
function sideScroll(elementId, direction) {
  const container = document.getElementById(elementId);
  const scrollAmount = direction === 'left' ? -400 : 400;
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// Drag-to-scroll implementation
const initDragScroll = () => {
  const containers = document.querySelectorAll('.horizontal-scroll, .genre-row');
  
  containers.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let moved = false;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('grabbing');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      moved = false;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('grabbing');
    });

    slider.addEventListener('mouseup', (e) => {
      isDown = false;
      slider.classList.remove('grabbing');
      // If we moved, prevent the next click event
      if (moved) {
        const preventClick = (e) => {
          e.stopImmediatePropagation();
          e.preventDefault();
          slider.removeEventListener('click', preventClick, true);
        };
        slider.addEventListener('click', preventClick, true);
      }
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast factor
      if (Math.abs(walk) > 5) moved = true;
      slider.scrollLeft = scrollLeft - walk;
    });
  });
};

// Call drag scroll init after rendering
// Updated in app.js: initDragScroll() should be called after renderHome()

