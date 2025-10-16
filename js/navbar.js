let lastScrollTop = 0;
const navbar = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);