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
