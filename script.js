// Theme toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleButton.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Contact form (optional: prevent default)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  form.reset();
});
