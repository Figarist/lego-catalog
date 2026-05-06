# 🤖 AI CONTEXT: LEGO WeDo 2.0 Catalog Architect

This file provides the technical context for AI assistants to understand the architecture, rules, and logic of this codebase.

## 🛑 Strict Rules

1.  **Zero Dependencies**: No frameworks (React, Vue, Svelte), no external libraries (jQuery, i18next, Axios).
2.  **Pure Vanilla**: Logic must remain in pure JavaScript (ES6+). Styling must remain in standard CSS.
3.  **Core Integrity**: Do not break the connection between `data_localized.js` and `store.js`.
4.  **No Cache for PDFs**: The Service Worker must **NOT** cache external Google Drive PDF links.

---

## 🏗 Architecture Breakdown

### 1. `app.js` (The Engine)
The central controller for UI rendering and events.
- **Search Logic**: Debounced (300ms) to prevent UI thread blocking on mobile.
- **Rendering**: Fragment-based DOM insertion for performance.
- **PWA**: Manages SW registration and version update notifications (Toast UI).
- **Share**: Implements Web Share API with clipboard fallback.

### 2. `store.js` (State Manager)
A dedicated wrapper for `LocalStorage`.
- **Schema**: Stores `favorites` (Array of paths), `built` (Array of paths), `ratings` (Object), and `lang` (String).
- **Data Healing**: On init, it validates stored IDs against the current `LEGO_DATA` to ensure no dead links persist.

### 3. `translations.js` (i18n Dictionary)
The source of truth for UI text.
- **Structure**: `I18N_DATA` nested by language code.
- **Helper**: `t(key)` function retrieves the translation based on `LegoStore.getLang()`.

### 4. `sw.js` (PWA Service Worker)
Handles the offline-first experience.
- **Strategy**: **Stale-While-Revalidate**. Serves from cache immediately, then fetches updates in the background.
- **Scope**: Caches the "App Shell" (HTML, CSS, JS, UI Images).
- **Update Logic**: Listens for `SKIP_WAITING` message to allow the new worker to take control.

### 5. `roulette.js` (Gamification)
Logic for the "Gacha" style random model picker.
- **Centering**: Uses scroll-to-index logic with easing.

---

## 💾 State & Data Persistence

The app uses the **instruction path (`p`)** as the primary unique identifier for models.
- **Critical**: If a model's path in `data_localized.js` changes, the `store.js` must handle the migration (Data Healing) to avoid loss of "Favorites" or "Built" status.
- **Validation**: `LegoStore.healData()` runs on every page load.

---

## 🌍 Custom i18n Implementation

1.  **HTML**: Elements use `data-i18n="key"` for static text.
2.  **Logic**: `updateUI()` iterates through these elements and populates `textContent` or `placeholder`.
3.  **Dynamic Content**: For `LEGO_DATA`, the helper `getLocalized(item.t)` is used to select the correct string from the `{uk, en, ru}` object based on current state.

---

## ⚡ Performance & Optimization

- **Image Lazy Loading**: Card images use `loading="lazy"` and `decoding="async"`.
- **Grid Layout**: CSS Grid with `repeat(auto-fill, ...)` for responsive cards without media queries overload.
- **Debounce**: All input-heavy operations are debounced to maintain 60fps interaction on tablets.

---
*Note: Always verify I18N_DATA availability before calling t() or getLocalized().*
