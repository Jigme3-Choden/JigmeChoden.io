// Feather Icons initialization
feather.replace();

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');

// Mobile Menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Active nav link highlighting on scroll
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('nav-link-active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('nav-link-active');
    }
  });
});

// Fade-in on scroll animation
function isVisible(elem) {
  const rect = elem.getBoundingClientRect();
  return rect.top < window.innerHeight - 60;
}
function checkFadeIn() {
  document.querySelectorAll('.fade-in').forEach(el => {
    if (isVisible(el)) el.style.opacity = '1';
  });
}
document.addEventListener('scroll', checkFadeIn);
window.addEventListener('DOMContentLoaded', checkFadeIn);

// Animate Circular Skill Progress Bars
function animateSkillCircles() {
  document.querySelectorAll('.skill-progress').forEach(circle => {
    const percent = circle.getAttribute('data-skill');
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (circumference * percent / 100);
    circle.style.strokeDashoffset = offset;
  });
}
// Run animations on load and on mouse enter to #skills section
window.addEventListener('DOMContentLoaded', animateSkillCircles);
document.getElementById('skills').addEventListener('mouseenter', animateSkillCircles);

// Optional: Smooth scrolling for nav links (improves UX)
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});