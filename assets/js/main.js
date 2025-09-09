
// Highlight active nav item based on current path
(function() {
  var links = document.querySelectorAll('.site-header.navbar .nav-link');
  var path = (window.location.pathname || '').toLowerCase();
  links.forEach(function(a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    // treat index.html and '/' as same
    if ((href.endsWith('index.html') && (path.endsWith('/') || path.endsWith('/index.html'))) ||
        (href && path.endsWith(href))) {
      a.classList.add('active');
    }
  });
})();
