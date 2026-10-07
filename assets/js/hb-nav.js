// Navigation

const applyScrollPadding = () => {
  const header = document.querySelector('.page-header');
  let position = header.getBoundingClientRect();
  document.documentElement.style.scrollPaddingTop = position.height.toString() + 'px';
  const r = document.querySelector(':root');
  r.style.setProperty('--navbar-height', position.height.toString() + 'px');
};

window.addEventListener("DOMContentLoaded", () => {
  const dropdownMenus = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenus.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("active");
    });
  });

  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle?.addEventListener('change', applyScrollPadding);
  navMenu?.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link || link.parentElement.classList.contains('nav-dropdown')) return;

    if (navToggle) navToggle.checked = false;
    navMenu.querySelectorAll('.nav-dropdown.active').forEach((dropdown) => {
      dropdown.classList.remove('active');
    });
    applyScrollPadding();
  });

  applyScrollPadding()
});
