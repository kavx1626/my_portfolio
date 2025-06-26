 function toggleTheme() {
      document.body.classList.toggle('dark-mode');
    }
const animatedSections = document.querySelectorAll('.section-animate');

function showOnScroll() {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);