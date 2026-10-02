// Mockup behavior only: forms are not connected to any backend.
document.querySelectorAll('.form-panel form').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var panel = form.closest('.form-panel');
    var first = form.querySelector('[name="first_name"]');
    var nameSlot = panel.querySelector('[data-first]');
    if (first && nameSlot) nameSlot.textContent = first.value.trim() || 'there';
    panel.classList.add('is-done');
    var done = panel.querySelector('.form-done');
    if (done) { done.setAttribute('tabindex', '-1'); done.focus(); }
  });
});

document.querySelectorAll('.video-play').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('.video').classList.add('is-open');
  });
});
document.querySelectorAll('.video-close').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('.video').classList.remove('is-open');
  });
});

// Mobile toggle for the CA main menu.
document.querySelectorAll('.ca-menu-btn').forEach(function (btn) {
  var menu = document.getElementById(btn.getAttribute('aria-controls'));
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  });
});

// Inside a session video: no autoplay for people who prefer reduced motion.
// Removing autoplay and reloading leaves the poster frame showing.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  function apply() {
    document.querySelectorAll('.session-video').forEach(function (video) {
      if (reduce.matches) {
        video.autoplay = false;
        video.removeAttribute('autoplay');
        video.pause();
        video.load();
      } else if (!video.autoplay) {
        video.autoplay = true;
        video.play().catch(function () {});
      }
    });
  }
  apply();
  if (reduce.addEventListener) reduce.addEventListener('change', apply);
})();
