# 🧱 LEGO WeDo 2.0 Catalog

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-success?style=for-the-badge&logo=pwa)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Frameworks](https://img.shields.io/badge/No-Frameworks-red?style=for-the-badge)](https://en.wikipedia.org/wiki/Plain_Vanilla)

An engaging, high-performance, and offline-first catalog of instructions for **LEGO WeDo 2.0**. Designed for kids and robotics educators, this app features a Roblox-style UI with gamification elements like favorites, ratings, and a built-in "Instructions Roulette".

---

## 🚀 Project Overview

This project was built to solve a specific problem: providing quick, localized, and offline access to hundreds of LEGO WeDo 2.0 building instructions in educational environments. 

- **Kid-Friendly**: Visual-heavy "Roblox-like" grid for easy navigation.
- **Offline-First**: Fully functional without an internet connection (once cached).
- **Multilingual**: Supports Ukrainian, English, and Russian out of the box.
- **Performance**: Optimized for older tablets and low-bandwidth environments.

---

## ✨ Key Features

- 📱 **Progressive Web App (PWA)**: Install it as a native app on Windows, Android, and iOS.
- 🎰 **Instructions Roulette**: A fun way for kids to pick their next project.
- 🌍 **Custom i18n Engine**: Dynamic language switching without page reloads.
- ❤️ **Favorites & Progress**: Track built models and save favorites to `LocalStorage`.
- 🔍 **Smart Search**: Debounced search with category filtering.
- 🔗 **Web Share API**: Share instructions with others using native system sharing.
- 🛠 **Data Healing**: Automatic migration of legacy instruction paths to new identifiers.

---

## 🛠 Tech Stack

- **HTML5**: Semantic structure.
- **CSS3**: Modern layout with Flexbox, Grid, and vibrant dark-mode aesthetics.
- **Vanilla JavaScript**: Zero dependencies. No React, no Vue, no external libraries.
- **Service Workers**: Stale-While-Revalidate caching strategy.

---

## 📖 How to Add New Models

Models are stored in `data_localized.js`. Each model is an object with localized titles and categories.

```javascript
{
  "t": { 
    "uk": "Робот-павук", 
    "en": "Spider Robot", 
    "ru": "Робот-паук" 
  },
  "c": "Роботи", // Primary category
  "ac": ["Роботи", "Тварини"], // Array of all categories for filtering
  "i": "https://path-to-image.jpg", // Thumbnail image
  "p": "https://drive.google.com/pdf-link" // Unique path (acts as ID)
}
```

---

## 🌍 How to Add a New Language

1.  Open `translations.js`.
2.  Add a new language key (e.g., `"fr"`) to the `I18N_DATA` object.
3.  Translate all existing keys.
4.  Update the language switcher in `index.html` to include the new button.
5.  Update `data_localized.js` to include the new language in each model's title.

---

## ⚖️ Legal Disclaimer

This catalog is a **non-commercial educational project** created for robotics classes.

- **Copyright**: All instructions, images, and materials belong to their legal owners, including **The LEGO Group**.
- **Fair Use**: This project is intended for educational purposes under Fair Use principles. 
- **Affiliation**: This site is not a product of the LEGO Group and is not officially endorsed by them.

---
*Built with ❤️ for young masters and future engineers.*
