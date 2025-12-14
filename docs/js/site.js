// Shared site script: load w3 includeHTML and provide sidebar controls
(function () {
  function includeAndInit() {
    if (window.w3 && typeof w3.includeHTML === 'function') {
      try {
        w3.includeHTML();
      } catch (e) {
        console.error('w3.includeHTML error', e);
      }
    }
  }

  function w3_open() {
    var el = document.getElementById('mySidebar');
    if (el) el.style.display = 'block';
  }

  function w3_close() {
    var el = document.getElementById('mySidebar');
    if (el) el.style.display = 'none';
  }

  // expose globally for inline handlers in templates
  window.w3_open = w3_open;
  window.w3_close = w3_close;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', includeAndInit);
  } else {
    includeAndInit();
  }
})();
