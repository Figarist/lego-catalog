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
      if (typeof triggerLegoConfetti === 'function') triggerLegoConfetti();
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
  const recentSection = $('recentSection');
  const recentGrid = $('recentGrid');
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
  const modalItemActions = $('modalItemActions');
  const modalOpenBtn = $('modalOpenBtn');
  const modalUnavailable = $('modalUnavailable');
  const modalClose = $('modalClose');

  // About Modal elements
  const aboutOverlay = $('aboutOverlay');
  const aboutModal = $('aboutModal');
  const aboutClose = $('aboutClose');
  const aboutBtn = $('aboutBtn');
  const footerAboutLink = $('footerAboutLink');

  // Roulette elements
  const btnRandom = $('btnRandom');
  const btnCatRandom = $('btnCatRandom');
  const rouletteOverlay = $('rouletteOverlay');
  const rouletteModal = $('rouletteModal');
  const rouletteClose = $('rouletteClose');
  const rouletteSoundBtn = $('rouletteSoundBtn');
  const rouletteScopeToggle = $('rouletteScopeToggle');
  const rouletteScopeCat = $('rouletteScopeCat');
  const rouletteScopeAll = $('rouletteScopeAll');
  const rouletteWindow = $('rouletteWindow');
  const roulettePointer = $('roulettePointer');
  const rouletteStrip = $('rouletteStrip');
  const rouletteStatus = $('rouletteStatus');
  const rouletteResult = $('rouletteResult');
  const rouletteActionBtn = $('rouletteActionBtn');
  const rouletteRerollBtn = $('rouletteRerollBtn');

  // Build Timer elements
  const buildTimerOverlay = $('buildTimerOverlay');
  const buildTimerClock = $('buildTimerClock');
  const buildTimerModel = $('buildTimerModel');
  const buildTimerDoneBtn = $('buildTimerDoneBtn');
  const buildTimerReopenBtn = $('buildTimerReopenBtn');
  const buildTimerKeepBtn = $('buildTimerKeepBtn');
  const buildTimerCancelBtn = $('buildTimerCancelBtn');
  const buildFloatingBar = $('buildFloatingBar');
  const buildFloatingExpand = $('buildFloatingExpand');
  const buildFloatingClock = $('buildFloatingClock');
  const buildFloatingTitle = $('buildFloatingTitle');
  const buildFloatingDone = $('buildFloatingDone');
  const emptyEmoji = $('emptyEmoji');
  const emptyTitle = $('emptyTitle');
  const emptyText = $('emptyText');
  const emptyChips = $('emptyChips');
  const emptyActions = $('emptyActions');
  const emptyResetBtn = $('emptyResetBtn');
  const emptyRandomBtn = $('emptyRandomBtn');
  let rouletteWinningItem = null;

  const navFav = $('navFav');
  const navFavCount = $('navFavCount');
  const navBuilt = $('navBuilt');
  const navRankIcon = $('navRankIcon');
  const navRankName = $('navRankName');
  const navRankFill = $('navRankFill');
  const themeToggle = $('themeToggle');

  const filterBar = $('filterBar');
  const filterUnbuiltBtn = $('filterUnbuilt');
  const filterRatedBtn = $('filterRated');
  const filterInCatBtn = $('filterInCat');
  const filterResultCount = $('filterResultCount');
  const filterResetBtn = $('filterResetBtn');

  let activeCat = 'home';
  let query = '';
  const activeFilters = { unbuilt: false, rated: false, inCat: false };

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
        // A worker installed on an earlier visit is still waiting: offer it again, or the old version sticks
        if (reg.waiting && navigator.serviceWorker.controller) {
          showUpdateToast(reg);
        }
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
    
    triggerLegoConfetti();
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
    const rankInfo = LegoStore.getRankInfo();
    const container = document.createElement('div');
    container.className = 'badges-container';

    const currentRankLabel = t('rank_' + rankInfo.current.id);
    const nextHint = rankInfo.next
      ? t('rank_next_hint').replace('{n}', rankInfo.remaining).replace('{next}', t('rank_' + rankInfo.next.id))
      : t('rank_max_hint');

    const rankBanner = document.createElement('div');
    rankBanner.className = 'rank-card';
    rankBanner.innerHTML = `
      <div class="rank-card-top">
        <div class="rank-card-badge">
          <span class="rank-card-icon">${rankInfo.current.icon}</span>
          <div>
            <div class="rank-card-kicker">${escapeHTML(t('rank_card_label'))}</div>
            <div class="rank-card-title">${escapeHTML(currentRankLabel)}</div>
          </div>
        </div>
        <div class="rank-card-pct">${rankInfo.pct}%</div>
      </div>
      <div class="rank-progress-track"><div class="rank-progress-fill" style="width:${rankInfo.pct}%"></div></div>
      <div class="rank-card-hint">${escapeHTML(nextHint)}</div>
    `;
    container.appendChild(rankBanner);

    const header = document.createElement('h2');
    header.className = 'badges-header';
    header.textContent = t('my_badges');
    container.appendChild(header);
    
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

  // Only external (http/https) instruction links are published. Repo-relative PDF paths are never
  // deployed (*.pdf is git-ignored), so such models show an "unavailable" state instead of a dead link.
  // Keep in sync with instructionHref() in scripts/generate-pages.mjs.
  function hasOnlineInstruction(item) {
    return /^https?:\/\//i.test(item.p || '');
  }


  function getLocalizedCat(cat) {
    const lang = LegoStore.getLang();
    return (CATEGORY_MAP[cat] && CATEGORY_MAP[cat][lang]) || cat;
  }

  function updateThemeBtn() {
    if (!themeToggle) return;
    const isLight = LegoStore.getTheme() === 'light';
    themeToggle.textContent = isLight ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    const label = t(isLight ? 'theme_to_dark' : 'theme_to_light');
    themeToggle.title = label;
    themeToggle.setAttribute('aria-label', label);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = LegoStore.getTheme() === 'light' ? 'dark' : 'light';
      LegoStore.setTheme(next);
      updateThemeBtn();
    });
  }

  function updateGlobalUI() {
    if (navFavCount) navFavCount.textContent = LegoStore.getFavorites().length;
    if (navFav) navFav.classList.toggle('has-items', LegoStore.getFavorites().length > 0);
    if (builtCountEl) builtCountEl.textContent = LegoStore.getBuiltItems().length;
    if (navBuilt) navBuilt.classList.toggle('has-items', LegoStore.getBuiltItems().length > 0);
    if (LegoStore.getRankInfo) {
      const rankInfo = LegoStore.getRankInfo();
      if (navRankIcon) navRankIcon.textContent = rankInfo.current.icon;
      if (navRankName) navRankName.textContent = t('rank_' + rankInfo.current.id);
      if (navRankFill) navRankFill.style.width = rankInfo.pct + '%';
    }
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
    updateThemeBtn();
    updateRouletteSoundBtn();
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

  function triggerLegoConfetti(originX, originY) {
    const canvas = $('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    
    const colors = ['#ff4757', '#ffc312', '#00d26a', '#1e90ff', '#ffffff', '#ff9f1a', '#a55eea'];
    const particles = [];
    const count = 70;
    
    const startX = originX !== undefined ? originX : width / 2;
    const startY = originY !== undefined ? originY : height * 0.45;
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 6;
      particles.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        sizeW: Math.random() * 11 + 7,
        sizeH: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 14,
        gravity: 0.38,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.012
      });
    }
    
    let animId;
    function render() {
      ctx.clearRect(0, 0, width, height);
      let activeCount = 0;
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.alpha <= 0) continue;
        activeCount++;
        
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;
        p.alpha -= p.decay;
        
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.sizeW / 2, -p.sizeH / 2, p.sizeW, p.sizeH);
        ctx.restore();
      }
      
      if (activeCount > 0) {
        animId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
        cancelAnimationFrame(animId);
      }
    }
    render();
  }

  function handleToggleBuilt(id, event) {
    const isNowBuilt = LegoStore.toggleBuilt(id, LEGO_DATA);
    if (isNowBuilt) {
      if (event && event.currentTarget && event.currentTarget.getBoundingClientRect) {
        const r = event.currentTarget.getBoundingClientRect();
        triggerLegoConfetti(r.left + r.width / 2, r.top + r.height / 2);
      } else {
        triggerLegoConfetti();
      }
      const navBuiltEl = $('navBuilt');
      if (navBuiltEl) {
        navBuiltEl.classList.remove('stat-pulse');
        void navBuiltEl.offsetWidth;
        navBuiltEl.classList.add('stat-pulse');
      }
    }
    updateGlobalUI();
    if (activeCat === 'built') renderGrid();
    else updateCardUI(id);
  }

  function handleToggleFavorite(id, event) {
    const adding = LegoStore.toggleFavorite(id);
    if (adding && event) {
      const btn = event.currentTarget;
      btn.classList.remove('heart-pop');
      void btn.offsetWidth;
      btn.classList.add('heart-pop');
      animateFlyingHeart(btn);
    }
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
    li.innerHTML = '<span class="cat-label"><span class="emoji">' + emoji + '</span><span class="cat-name">' + escapeHTML(label) + '</span></span>' + countHtml;
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

    const showCatRandom = key !== 'home' && key !== 'all' && key !== 'built';
    if (btnCatRandom) btnCatRandom.classList.toggle('hidden', !showCatRandom);

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

  function renderRecent() {
    if (!recentSection || !recentGrid || !LegoStore.getRecent) return;
    const recentIds = LegoStore.getRecent();
    const recentItems = recentIds.map(id => LEGO_DATA.find(x => x.p === id)).filter(Boolean);
    recentSection.classList.toggle('hidden', recentItems.length === 0);
    if (recentItems.length > 0) {
      renderSimpleGrid(recentGrid, recentItems);
    }
  }

  // Render Home Hub
  function renderHome() {
    renderRecent();

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

    // Build Time Badge
    const savedTime = LegoStore.getBuildTime ? LegoStore.getBuildTime(item.p) : 0;
    if (savedTime > 0) {
      const tBadge = document.createElement('div');
      tBadge.className = 'card-build-time';
      tBadge.textContent = t('build_time_badge').replace('{time}', formatBuildTime(savedTime));
      div.appendChild(tBadge);
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

    const online = hasOnlineInstruction(item);
    if (online) {
      const badge = document.createElement('div');
      badge.className = 'play-badge';
      badge.textContent = '▶';
      div.appendChild(badge);
    } else {
      div.classList.add('is-unavailable');
    }

    const body = document.createElement('div');
    body.className = 'card-body';
    const titleText = getLocalized(item.t);
    const catText = online ? getLocalizedCat(item.c) : t('instruction_unavailable');
    body.innerHTML = `<div class="card-title" title="${escapeHTML(titleText)}">${escapeHTML(titleText)}</div><div class="card-cat">${escapeHTML(catText)}</div>`;

    div.appendChild(imgDiv);
    div.appendChild(body);
    return div;
  }

  function syncFilterBarUI(count) {
    if (!filterBar) return;
    const isBuiltTab = activeCat === 'built' && !query;
    filterBar.classList.toggle('hidden', isBuiltTab);
    if (isBuiltTab) return;

    const hasSpecificCat = Boolean(query && activeCat !== 'home' && activeCat !== 'all' && activeCat !== 'favorites' && activeCat !== 'built');
    if (filterInCatBtn) {
      filterInCatBtn.classList.toggle('hidden', !hasSpecificCat);
      if (hasSpecificCat) {
        filterInCatBtn.textContent = t('filter_in_cat') + ': ' + getLocalizedCat(activeCat);
      }
      filterInCatBtn.classList.toggle('active', activeFilters.inCat);
    }
    if (filterUnbuiltBtn) filterUnbuiltBtn.classList.toggle('active', activeFilters.unbuilt);
    if (filterRatedBtn) filterRatedBtn.classList.toggle('active', activeFilters.rated);

    const anyActive = activeFilters.unbuilt || activeFilters.rated || (hasSpecificCat && activeFilters.inCat);
    if (filterResetBtn) filterResetBtn.classList.toggle('hidden', !anyActive);
    if (filterResultCount) filterResultCount.textContent = count + ' ' + t('models_count');
  }

  [filterUnbuiltBtn, filterRatedBtn, filterInCatBtn].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      const key = btn.dataset.filter;
      if (key === 'unbuilt') activeFilters.unbuilt = !activeFilters.unbuilt;
      else if (key === 'rated') activeFilters.rated = !activeFilters.rated;
      else if (key === 'incat') activeFilters.inCat = !activeFilters.inCat;
      renderGrid();
    });
  });

  if (filterResetBtn) {
    filterResetBtn.addEventListener('click', () => {
      activeFilters.unbuilt = false;
      activeFilters.rated = false;
      activeFilters.inCat = false;
      renderGrid();
    });
  }

  // Filter
  function getFiltered() {
    return LEGO_DATA.filter((item, idx) => {
      if (query) {
        if (!searchIndex[idx].includes(query)) return false;
        if (activeCat === 'favorites' && !LegoStore.isFavorite(item.p)) return false;
        if (activeCat === 'built' && !LegoStore.isBuilt(item.p)) return false;
        if (activeFilters.inCat && activeCat !== 'home' && activeCat !== 'all' && activeCat !== 'favorites' && activeCat !== 'built') {
          if (!item.ac.includes(activeCat)) return false;
        }
      } else {
        if (activeCat === 'favorites' && !LegoStore.isFavorite(item.p)) return false;
        else if (activeCat === 'built' && !LegoStore.isBuilt(item.p)) return false;
        else if (activeCat !== 'all' && activeCat !== 'home' && !item.ac.includes(activeCat)) return false;
      }

      if (activeFilters.unbuilt && LegoStore.isBuilt(item.p)) return false;
      if (activeFilters.rated && LegoStore.getRating(item.p) <= 0) return false;
      return true;
    });
  }

  // Render grid for specific category or search
  function renderGrid() {
    const items = getFiltered();
    syncFilterBarUI(items.length);
    grid.innerHTML = '';

    if (activeCat === 'built') {
      emptyEl.classList.add('hidden');
      const fragment = document.createDocumentFragment();
      fragment.appendChild(renderAchievementsGrid());
      
      if (items.length === 0) {
        const emptyPrompt = document.createElement('div');
        emptyPrompt.className = 'built-empty-prompt';
        emptyPrompt.innerHTML = `
          <div class="built-empty-icon">🏆</div>
          <div class="built-empty-title">${t('empty_built_title')}</div>
          <div class="built-empty-desc">${t('empty_built_text')}</div>
          <button class="empty-action-btn empty-action-btn-accent" id="builtExploreBtn">${t('empty_built_btn')}</button>
        `;
        const exploreBtn = emptyPrompt.querySelector('#builtExploreBtn');
        if (exploreBtn) {
          exploreBtn.onclick = () => switchView('home', 'home', '🏠');
        }
        fragment.appendChild(emptyPrompt);
      } else {
        items.forEach((item, i) => {
          fragment.appendChild(createCard(item, i));
        });
      }
      grid.appendChild(fragment);
      return;
    }

    if (activeCat === 'favorites' && items.length === 0) {
      emptyEl.classList.remove('hidden');
      if (emptyEmoji) emptyEmoji.textContent = '❤️';
      if (emptyTitle) emptyTitle.textContent = t('empty_fav_title');
      if (emptyText) emptyText.textContent = t('empty_fav_text');
      if (emptyChips) emptyChips.classList.add('hidden');
      if (emptyResetBtn) emptyResetBtn.classList.add('hidden');
      if (emptyRandomBtn) {
        emptyRandomBtn.classList.remove('hidden');
        emptyRandomBtn.textContent = t('empty_fav_btn');
        emptyRandomBtn.onclick = () => switchView('all', t('view_all'), '🎯');
      }
      return;
    }

    if (items.length === 0) {
      emptyEl.classList.remove('hidden');
      if (emptyEmoji) emptyEmoji.textContent = '🤔';
      if (emptyTitle) emptyTitle.textContent = t('empty_search_title') || t('empty_title');
      if (emptyText) emptyText.textContent = t('empty_search_text') || t('empty_text');
      if (emptyChips) emptyChips.classList.remove('hidden');
      if (emptyResetBtn) {
        emptyResetBtn.classList.remove('hidden');
        emptyResetBtn.textContent = t('empty_reset_btn');
        emptyResetBtn.onclick = () => {
          if (searchInput) searchInput.value = '';
          if (clearBtn) clearBtn.classList.add('hidden');
          switchView('all', t('view_all'), '🎯');
          renderGrid();
        };
      }
      if (emptyRandomBtn) {
        emptyRandomBtn.classList.remove('hidden');
        emptyRandomBtn.textContent = t('empty_random_btn');
        emptyRandomBtn.onclick = () => {
          if (searchInput) searchInput.value = '';
          if (clearBtn) clearBtn.classList.add('hidden');
          startRoulette();
        };
      }
      return;
    }

    emptyEl.classList.add('hidden');
    const fragment = document.createDocumentFragment();
    items.forEach((item, i) => {
      fragment.appendChild(createCard(item, i));
    });
    grid.appendChild(fragment);
  }

  // === MODAL ===
  function openModal(item) {
    if (LegoStore.addRecent) {
      LegoStore.addRecent(item.p);
      if (activeCat === 'home') renderRecent();
    }
    const lang = LegoStore.getLang();
    if (item.i) {
      modalImg.innerHTML = `<img src="${escapeHTML(item.i)}" alt="${escapeHTML(getLocalized(item.t))}">`;
    } else {
      modalImg.innerHTML = `<div class="no-img"><span class="no-img-icon">📋</span><br>${escapeHTML(t('label_official_full'))}</div>`;
    }
    modalTitle.textContent = getLocalized(item.t);
    modalCats.innerHTML = '';
    if (modalItemActions) modalItemActions.innerHTML = '';
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
    if (modalItemActions) modalItemActions.appendChild(modalFavBtn);

    // Add Share to Modal
    const modalShareBtn = document.createElement('button');
    modalShareBtn.className = 'modal-share-btn';
    modalShareBtn.innerHTML = `<span>🔗</span> ${t('btn_share')}`;
    modalShareBtn.onclick = () => handleShare(item);
    if (modalItemActions) modalItemActions.appendChild(modalShareBtn);

    const online = hasOnlineInstruction(item);
    if (online) {
      modalOpenBtn.href = item.p;
      modalOpenBtn.onclick = () => {
        if (LegoStore.startBuild) {
          LegoStore.startBuild(item.p);
          openBuildTimerModal(item);
        }
      };
    } else {
      modalOpenBtn.removeAttribute('href');
      modalOpenBtn.onclick = null;
    }
    modalOpenBtn.classList.toggle('hidden', !online);
    if (modalUnavailable) modalUnavailable.classList.toggle('hidden', online);

    // Built toggle in modal
    const modalBuiltInput = $('modalBuilt');
    modalBuiltInput.checked = LegoStore.isBuilt(item.p);
    modalBuiltInput.onclick = (e) => {
      handleToggleBuilt(item.p, e);
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

  // --- About Modal (#about) Logic ---
  function openAboutModal() {
    closeModal();
    closeRoulette();
    if (!aboutOverlay) return;
    aboutOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.location.hash !== '#about') {
      try {
        history.pushState(null, '', '#about');
      } catch (err) {
        window.location.hash = 'about';
      }
    }
    if (aboutClose) setTimeout(() => aboutClose.focus(), 100);
  }

  function closeAboutModal() {
    if (!aboutOverlay) return;
    aboutOverlay.classList.remove('active');
    if (!modalOverlay.classList.contains('active') && !rouletteOverlay.classList.contains('active')) {
      document.body.style.overflow = '';
    }
    if (window.location.hash === '#about') {
      try {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch (err) {
        window.location.hash = '';
      }
    }
  }

  if (aboutBtn) {
    aboutBtn.addEventListener('click', e => {
      e.preventDefault();
      openAboutModal();
    });
  }

  if (footerAboutLink) {
    footerAboutLink.addEventListener('click', e => {
      e.preventDefault();
      openAboutModal();
    });
  }

  if (aboutClose) {
    aboutClose.addEventListener('click', closeAboutModal);
  }

  if (aboutOverlay) {
    aboutOverlay.addEventListener('click', e => {
      if (e.target === aboutOverlay) closeAboutModal();
    });
  }

  if (aboutModal) {
    aboutModal.addEventListener('keydown', e => {
      if (e.key !== 'Tab') return;
      const focusable = aboutModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  // Hash route listener for direct link (#about)
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#about') {
      openAboutModal();
    } else if (aboutOverlay && aboutOverlay.classList.contains('active')) {
      closeAboutModal();
    }
  });

  if (window.location.hash === '#about') {
    setTimeout(openAboutModal, 150);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (buildTimerOverlay && buildTimerOverlay.classList.contains('active')) {
        minimizeBuildTimer();
        return;
      }
      closeModal();
      closeRoulette();
      closeAboutModal();
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

  // === BUILD TIMER LOGIC ===
  let buildTimerInterval = null;

  function formatBuildTime(totalSec) {
    const s = Math.max(0, Math.floor(totalSec));
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    const mm = String(mins).padStart(2, '0');
    const ss = String(secs).padStart(2, '0');
    return hrs > 0 ? `${hrs}:${mm}:${ss}` : `${mm}:${ss}`;
  }

  function updateBuildTimerTick() {
    const active = LegoStore.getActiveBuild ? LegoStore.getActiveBuild() : null;
    if (!active) return;
    const elapsed = Math.max(0, Math.floor((Date.now() - active.startedAt) / 1000));
    const formatted = formatBuildTime(elapsed);
    if (buildTimerClock) buildTimerClock.textContent = formatted;
    if (buildFloatingClock) buildFloatingClock.textContent = formatted;
  }

  function startBuildTimerInterval() {
    if (buildTimerInterval) clearInterval(buildTimerInterval);
    updateBuildTimerTick();
    buildTimerInterval = setInterval(updateBuildTimerTick, 1000);
  }

  function stopBuildTimerInterval() {
    if (buildTimerInterval) {
      clearInterval(buildTimerInterval);
      buildTimerInterval = null;
    }
  }

  function openBuildTimerModal(item) {
    closeModal();
    if (!buildTimerOverlay) return;
    const titleText = getLocalized(item.t);
    if (buildTimerModel) buildTimerModel.textContent = titleText;
    if (buildFloatingTitle) buildFloatingTitle.textContent = titleText;
    if (buildFloatingBar) buildFloatingBar.classList.add('hidden');
    buildTimerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    startBuildTimerInterval();
  }

  function minimizeBuildTimer() {
    if (!buildTimerOverlay) return;
    buildTimerOverlay.classList.remove('active');
    document.body.style.overflow = '';
    const active = LegoStore.getActiveBuild ? LegoStore.getActiveBuild() : null;
    if (active && buildFloatingBar) {
      const item = LEGO_DATA.find(x => x.p === active.id);
      if (item && buildFloatingTitle) buildFloatingTitle.textContent = getLocalized(item.t);
      buildFloatingBar.classList.remove('hidden');
      startBuildTimerInterval();
    }
  }

  function finishActiveBuild() {
    const active = LegoStore.getActiveBuild ? LegoStore.getActiveBuild() : null;
    if (!active) return;
    const elapsedSec = LegoStore.finishBuild(active.id);
    stopBuildTimerInterval();
    if (buildTimerOverlay) buildTimerOverlay.classList.remove('active');
    if (buildFloatingBar) buildFloatingBar.classList.add('hidden');
    document.body.style.overflow = '';

    if (!LegoStore.isBuilt(active.id)) {
      LegoStore.toggleBuilt(active.id, LEGO_DATA);
    }
    updateGlobalUI();
    updateCardUI(active.id);
    if (activeCat === 'built') renderGrid();
    triggerLegoConfetti();

    const toast = document.createElement('div');
    toast.className = 'update-toast';
    toast.innerHTML = `<div class="toast-content"><span>${escapeHTML(t('build_timer_congrats').replace('{time}', formatBuildTime(elapsedSec)))}</span></div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  function cancelActiveBuild() {
    stopBuildTimerInterval();
    if (LegoStore.cancelBuild) LegoStore.cancelBuild();
    if (buildTimerOverlay) buildTimerOverlay.classList.remove('active');
    if (buildFloatingBar) buildFloatingBar.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (buildTimerDoneBtn) buildTimerDoneBtn.addEventListener('click', finishActiveBuild);
  if (buildFloatingDone) buildFloatingDone.addEventListener('click', finishActiveBuild);
  if (buildTimerKeepBtn) buildTimerKeepBtn.addEventListener('click', minimizeBuildTimer);
  if (buildTimerCancelBtn) buildTimerCancelBtn.addEventListener('click', cancelActiveBuild);
  if (buildTimerReopenBtn) {
    buildTimerReopenBtn.addEventListener('click', () => {
      const active = LegoStore.getActiveBuild ? LegoStore.getActiveBuild() : null;
      if (active && /^https?:\/\//i.test(active.id)) {
        window.open(active.id, '_blank', 'noopener,noreferrer');
      }
    });
  }
  if (buildFloatingExpand) {
    buildFloatingExpand.addEventListener('click', () => {
      const active = LegoStore.getActiveBuild ? LegoStore.getActiveBuild() : null;
      if (!active) return;
      const item = LEGO_DATA.find(x => x.p === active.id);
      if (item) openBuildTimerModal(item);
    });
  }

  // Init
  LegoStore.healData(LEGO_DATA);
  updateUI();
  initDragScroll();
  if (LegoStore.getActiveBuild) {
    const pendingBuild = LegoStore.getActiveBuild();
    if (pendingBuild) {
      const pendingItem = LEGO_DATA.find(x => x.p === pendingBuild.id);
      if (pendingItem && buildFloatingBar) {
        if (buildFloatingTitle) buildFloatingTitle.textContent = getLocalized(pendingItem.t);
        buildFloatingBar.classList.remove('hidden');
        startBuildTimerInterval();
      } else {
        LegoStore.cancelBuild();
      }
    }
  }

  // === ROULETTE LOGIC ===
  let rouletteCategory = null;
  let rouletteScope = 'all';

  function updateRouletteSoundBtn() {
    if (!rouletteSoundBtn || !window.LegoRoulette) return;
    const on = LegoRoulette.isSoundEnabled();
    rouletteSoundBtn.textContent = on ? '🔊' : '🔇';
    rouletteSoundBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    rouletteSoundBtn.classList.toggle('is-on', on);
    const label = t(on ? 'roulette_sound_off' : 'roulette_sound_on');
    rouletteSoundBtn.setAttribute('aria-label', label);
    rouletteSoundBtn.title = label;
  }

  if (rouletteSoundBtn) {
    rouletteSoundBtn.addEventListener('click', () => {
      if (!window.LegoRoulette) return;
      LegoRoulette.setSoundEnabled(!LegoRoulette.isSoundEnabled());
      updateRouletteSoundBtn();
    });
    updateRouletteSoundBtn();
  }

  function getRoulettePool() {
    if (rouletteScope !== 'cat' || !rouletteCategory) return LEGO_DATA;
    let pool;
    if (rouletteCategory === 'favorites') {
      pool = LEGO_DATA.filter(x => LegoStore.isFavorite(x.p));
    } else {
      pool = LEGO_DATA.filter(x => x.ac && x.ac.includes(rouletteCategory));
    }
    return pool.length > 0 ? pool : LEGO_DATA;
  }

  function syncRouletteScopeUI() {
    if (!rouletteScopeToggle) return;
    rouletteScopeToggle.classList.toggle('hidden', !rouletteCategory);
    if (rouletteScopeCat) rouletteScopeCat.classList.toggle('active', rouletteScope === 'cat');
    if (rouletteScopeAll) rouletteScopeAll.classList.toggle('active', rouletteScope === 'all');
  }

  function runRouletteSpin() {
    document.body.style.overflow = 'hidden';
    if (window.LegoRoulette && window.LegoRoulette.unlockAudio) {
      window.LegoRoulette.unlockAudio();
    }
    updateRouletteSoundBtn();
    syncRouletteScopeUI();
    const pool = getRoulettePool();
    LegoRoulette.start({
      overlay: rouletteOverlay,
      modal: rouletteModal,
      strip: rouletteStrip,
      windowEl: rouletteWindow,
      pointerEl: roulettePointer,
      statusEl: rouletteStatus,
      resultEl: rouletteResult,
      actionBtn: rouletteActionBtn,
      rerollBtn: rouletteRerollBtn,
      data: pool,
      t: t,
      getCategoryLabel: (cat) => {
        if (!cat) return '';
        const emoji = CATEGORY_EMOJI[cat] ? CATEGORY_EMOJI[cat] + ' ' : '';
        return emoji + getLocalizedCat(cat);
      },
      onWin: (item) => {
        rouletteWinningItem = item;
        if (rouletteWindow) {
          const r = rouletteWindow.getBoundingClientRect();
          triggerLegoConfetti(r.left + r.width / 2, r.top + r.height / 2);
          setTimeout(() => triggerLegoConfetti(r.left + r.width / 2, r.top + 30), 220);
        } else {
          triggerLegoConfetti();
        }
      }
    });
  }

  function startRoulette(scopeCat) {
    if (typeof scopeCat === 'string' && scopeCat) {
      rouletteCategory = scopeCat;
      rouletteScope = 'cat';
    } else {
      rouletteCategory = null;
      rouletteScope = 'all';
    }
    runRouletteSpin();
  }

  if (btnRandom) {
    btnRandom.addEventListener('click', () => startRoulette(null));
  }

  if (btnCatRandom) {
    btnCatRandom.addEventListener('click', () => startRoulette(activeCat));
  }

  if (rouletteScopeCat) {
    rouletteScopeCat.addEventListener('click', () => {
      if (rouletteScope === 'cat') return;
      rouletteScope = 'cat';
      runRouletteSpin();
    });
  }

  if (rouletteScopeAll) {
    rouletteScopeAll.addEventListener('click', () => {
      if (rouletteScope === 'all') return;
      rouletteScope = 'all';
      runRouletteSpin();
    });
  }

  if (rouletteRerollBtn) {
    rouletteRerollBtn.addEventListener('click', runRouletteSpin);
  }

  function closeRoulette() {
    rouletteOverlay.classList.remove('active');
    if (rouletteModal) {
      rouletteModal.classList.remove('is-spinning', 'is-won');
    }
    if (window.LegoRoulette && window.LegoRoulette.cancel) {
      window.LegoRoulette.cancel();
    }
    if (!modalOverlay.classList.contains('active') && !(aboutOverlay && aboutOverlay.classList.contains('active'))) {
      document.body.style.overflow = '';
    }
  }

  if (rouletteClose) {
    rouletteClose.addEventListener('click', closeRoulette);
  }

  rouletteOverlay.addEventListener('click', (e) => {
    if (e.target === rouletteOverlay) closeRoulette();
  });

  if (rouletteActionBtn) {
    rouletteActionBtn.addEventListener('click', () => {
      closeRoulette();
      if (rouletteWinningItem) openModal(rouletteWinningItem);
    });
  }

  // --- Empty State Chips & Reset Logic ---
  document.querySelectorAll('.empty-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const searchVal = chip.getAttribute('data-search');
      if (searchVal && searchInput) {
        searchInput.value = searchVal;
        if (clearBtn) clearBtn.classList.remove('hidden');
        switchView('all', t('view_all'), '🎯');
        renderGrid();
      }
    });
  });

  // --- WeDy Mascot Interactivity ---
  const heroMascot = $('heroMascot');
  const mascotBubble = $('mascotBubble');
  const mascotQuotes = {
    uk: [
      "Готовий будувати? Тисни сюди! 🚀",
      "Спробуй Колесо Інструкцій! 🎡",
      "Зубчаста передача — це суперсила! ⚙️",
      "Ти майстерний інженер! 🌟",
      "Пам'ятай про фіксацію балок! 📐",
      "Я вірю в твого нового робота! 🤖",
      "LEGO WeDo 2.0 — найкращий набір! 🧱"
    ],
    en: [
      "Ready to build? Tap here! 🚀",
      "Try the Model Wheel! 🎡",
      "Gears are a true superpower! ⚙️",
      "You are a master builder! 🌟",
      "Don't forget to lock the beams! 📐",
      "I believe in your new robot! 🤖"
    ],
    ru: [
      "Готов строить? Жми сюда! 🚀",
      "Попробуй Колесо Инструкций! 🎡",
      "Зубчатая передача — суперсила! ⚙️",
      "Ты классный инженер! 🌟",
      "Помни про фиксацию балок! 📐"
    ],
    pl: [
      "Gotowy do budowania? Kliknij tutaj! 🚀",
      "Wypróbuj Koło Instrukcji! 🎡",
      "Przekładnia zębata to supermoc! ⚙️",
      "Jesteś mistrzem inżynierii! 🌟"
    ]
  };

  let mascotQuoteIdx = 0;
  if (heroMascot) {
    heroMascot.addEventListener('click', (e) => {
      const rect = heroMascot.getBoundingClientRect();
      if (typeof triggerLegoConfetti === 'function') {
        triggerLegoConfetti(rect.left + rect.width / 2, rect.top + 30);
      }
      
      const mascotImgEl = $('mascotImg');
      if (mascotImgEl) {
        mascotImgEl.classList.remove('mascot-jump');
        void mascotImgEl.offsetWidth;
        mascotImgEl.classList.add('mascot-jump');
      }

      if (mascotBubble) {
        const lang = LegoStore.getLang();
        const quotes = mascotQuotes[lang] || mascotQuotes.uk;
        mascotQuoteIdx = (mascotQuoteIdx + 1) % quotes.length;
        mascotBubble.textContent = quotes[mascotQuoteIdx];
        mascotBubble.style.display = 'block';
        mascotBubble.style.transform = 'scale(1.15)';
        setTimeout(() => {
          mascotBubble.style.transform = 'scale(1)';
        }, 300);
      }
    });
  }

  // --- Share Logic with Deep Linking ---
  async function handleShare(item) {
    const shareUrl = new URL(window.location.origin + window.location.pathname);
    shareUrl.searchParams.set('model', item.p);

    const shareData = {
      title: getLocalized(item.t),
      text: `${getLocalized(item.t)} - LEGO WeDo 2.0 Catalog`,
      url: shareUrl.toString()
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

  // Deep Link Auto-Open
  // Older share links were encoded twice, so decode once more when possible (a stray '%' would throw)
  let targetModelParam = new URLSearchParams(window.location.search).get('model');
  if (targetModelParam) {
    try { targetModelParam = decodeURIComponent(targetModelParam); } catch { /* already plain */ }
    const found = LEGO_DATA.find(x => x.p === targetModelParam || x.p.includes(targetModelParam));
    if (found) {
      setTimeout(() => openModal(found), 250);
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

