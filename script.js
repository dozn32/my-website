const items = document.querySelectorAll('.item');

window.addEventListener('scroll', () => {
  items.forEach(item => {
    const position = item.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 50) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }
  });
});