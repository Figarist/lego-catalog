# 🤖 AI Context & Developer Guide | LEGO WeDo 2.0 Catalog

This document provides the essential architectural context for any AI assistant or developer working on this project. It defines the "Source of Truth" for our custom implementations.

## 🚀 Project Overview
- **Purpose**: A high-performance, kids-friendly instruction catalog for LEGO WeDo 2.0 robotics.
- **UI Paradigm**: Modern "Game-Hub" aesthetics (inspired by Roblox/Steam), featuring dark mode, glassmorphism, and responsive grids.
- **Constraints**: 
  - **Offline-First**: Must run locally without a server.
  - **No Frameworks**: Pure Vanilla JS, CSS3, and HTML5 only. 
  - **No Build Tools**: No Webpack/Babel. Files are served as-is via CDN/local paths.

## 🏗 Architecture Breakdown

### 📂 Core Files
- `index.html`: The main entry point. Uses `data-i18n` attributes for UI strings.
- `app.js`: The "Engine". Handles DOM manipulation, routing (views switching), and search logic.
- `store.js`: The "State Manager". Encapsulates `localStorage` access and business logic for Favorites/Built status.
- `translations.js`: The "I18n Store". Contains `I18N_DATA` (UI strings) and `CATEGORY_MAP`.
- `data_localized.js`: The "Database". A flat array of ~600 objects (`LEGO_DATA`) with localized titles and metadata.
- `roulette.js`: A standalone module for the "Instructions Roulette" animation.

## 🌍 Custom i18n System
We use a lightweight, attribute-driven localization engine instead of external libraries.

### 1. Static UI Localization
Elements are tagged with `data-i18n="KEY"`. The `app.js` engine iterates through these on language change and updates `textContent`, `placeholder`, or `title`.

### 2. Data Structure (`translations.js`)
```javascript
const I18N_DATA = {
    "uk": { "nav_favorites": "Моє обране", ... },
    "en": { "nav_favorites": "My Favorites", ... },
    "ru": { "nav_favorites": "Мое избранное", ... }
};
```

### 3. Localized Models (`data_localized.js`)
Titles are objects, NOT strings:
```javascript
{
    "t": { "uk": "Кіт", "en": "Cat", "ru": "Кот" },
    "c": "Тварини", // Reference key for CATEGORY_MAP
    "p": "https://drive.google.com/..." // This is the UNIQUE ID for storage
}
```

## 💾 State Management & Data Healing

### 1. Persistence
State is managed via `LegoStore` module. It persists:
- `app_lang`: Current UI language.
- `lego_favs`: Array of IDs (`item.p`).
- `lego_built`: Array of IDs (`item.p`).

### 2. Data Healing Concept (CRITICAL)
Since the catalog is often updated with new links or structure, `LegoStore.healData()` ensures that user progress isn't lost if URLs or slugs change. 
- It maps old unique identifiers (legacy slugs) to new `p` (URL) identifiers.
- **Rule**: Always use `item.p` as the primary key for state, but never assume it is immutable.

## 🎯 Development Principles
1. **Performance**: Use `DocumentFragment` for heavy grid rendering.
2. **Laziness**: Images must use `loading="lazy"`.
3. **Safety**: Always use `getLocalized(item.t)` and `getLocalizedCat(item.c)` helpers instead of direct access to ensure fallback safety.
4. **Style**: Stick to CSS variables defined in `:root` for consistency.
