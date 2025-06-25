document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('darkModeToggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.header-top').classList.toggle('dark-header');
  });
});