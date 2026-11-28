#!/usr/bin/env node
/**
 * Automated i18n parity & completeness gate for LEGO WeDo 2.0 Catalog.
 * Verifies:
 *  1. 100% key parity across uk, en, pl, ru, ko in I18N_DATA, I18N_ACHIEVEMENTS, CATEGORY_MAP.
 *  2. Every data-i18n, data-i18n-title, data-i18n-aria, data-i18n-href, data-i18n-alt,
 *     and data-search-key in index.html and legal.html exists in all 5 locales.
 *  3. No <summary class="seo-faq-summary"> or <p class="seo-faq-answer"> lacks data-i18n.
 *  4. No Ukrainian Cyrillic characters (є, ї, і, ґ) inside en, pl, ru, or ko values in I18N_DATA.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const LANGS = ['uk', 'en', 'pl', 'ru', 'ko'];
const UK_CYRILLIC_RE = /[єіїґЄІЇҐ]/;

const translationsSrc = readFileSync(join(ROOT, 'translations.js'), 'utf8');
const ctx = {};
vm.runInNewContext(
  `${translationsSrc}\n;globalThis.__OUT__ = { I18N_DATA, I18N_ACHIEVEMENTS, CATEGORY_MAP };`,
  ctx
);
const { I18N_DATA, I18N_ACHIEVEMENTS, CATEGORY_MAP } = ctx.__OUT__;

const errors = [];

function checkLocaleParity(obj, name) {
  for (const lang of LANGS) {
    if (!obj || typeof obj[lang] !== 'object') {
      errors.push(`${name} is missing locale "${lang}"`);
    }
  }
  const allKeys = new Set();
  for (const lang of LANGS) {
    if (obj && obj[lang]) {
      for (const k of Object.keys(obj[lang])) allKeys.add(k);
    }
  }
  for (const lang of LANGS) {
    if (!obj || !obj[lang]) continue;
    for (const k of allKeys) {
      if (!(k in obj[lang]) || typeof obj[lang][k] !== 'string' || obj[lang][k].trim() === '') {
        errors.push(`${name}.${lang} is missing or empty key "${k}"`);
      }
    }
  }
}

checkLocaleParity(I18N_DATA, 'I18N_DATA');
checkLocaleParity(I18N_ACHIEVEMENTS, 'I18N_ACHIEVEMENTS');

if (!CATEGORY_MAP || typeof CATEGORY_MAP !== 'object') {
  errors.push('CATEGORY_MAP is missing');
} else {
  for (const [ukCat, map] of Object.entries(CATEGORY_MAP)) {
    for (const lang of LANGS) {
      if (!map || typeof map[lang] !== 'string' || map[lang].trim() === '') {
        errors.push(`CATEGORY_MAP["${ukCat}"].${lang} is missing or empty`);
      }
    }
  }
}

for (const lang of ['en', 'pl', 'ru', 'ko']) {
  const dict = I18N_DATA[lang] || {};
  for (const [k, v] of Object.entries(dict)) {
    if (typeof v === 'string' && UK_CYRILLIC_RE.test(v)) {
      errors.push(`I18N_DATA.${lang}.${k} contains Ukrainian-only Cyrillic character(s): ${v}`);
    }
  }
}

const ATTR_RE = /\bdata-(?:i18n|i18n-title|i18n-aria|i18n-href|i18n-alt|search-key)="([^"]+)"/g;
for (const file of ['index.html', 'legal.html']) {
  const html = readFileSync(join(ROOT, file), 'utf8');
  const keys = new Set();
  let m;
  while ((m = ATTR_RE.exec(html)) !== null) {
    keys.add(m[1]);
  }
  for (const k of keys) {
    for (const lang of LANGS) {
      if (!I18N_DATA[lang] || !(k in I18N_DATA[lang])) {
        errors.push(`${file} references i18n key "${k}" missing in I18N_DATA.${lang}`);
      }
    }
  }
}

const indexHtml = readFileSync(join(ROOT, 'index.html'), 'utf8');
const FAQ_TAG_RE = /<(summary|p)\b([^>]*class="[^"]*\bseo-faq-(?:summary|answer)\b[^"]*"[^>]*)>/g;
let fm;
while ((fm = FAQ_TAG_RE.exec(indexHtml)) !== null) {
  if (!/\bdata-i18n="[^"]+"/.test(fm[2])) {
    errors.push(`index.html <${fm[1]} ${fm[2]}> is missing data-i18n`);
  }
}

if (errors.length > 0) {
  console.error(`i18n check FAILED (${errors.length} issue(s)):`);
  for (const e of errors) console.error(' - ' + e);
  process.exit(1);
}

console.log(`i18n check passed (${Object.keys(I18N_DATA.uk).length} keys x ${LANGS.length} locales, ${Object.keys(CATEGORY_MAP).length} categories).`);
