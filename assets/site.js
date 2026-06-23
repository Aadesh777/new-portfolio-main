/* ═══════════════════════════════════════════════════
   WHO.AADESHDAHAL.COM.NP — assets/site.js
   Minimal JS — just updates the footer copyright year
   on every page automatically.
═══════════════════════════════════════════════════ */

document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
