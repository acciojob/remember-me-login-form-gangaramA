//your JS code here. If required.
// DOM Elements
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const existingButton = document.getElementById('existing');

// Load saved credentials on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingButton.style.display = 'block';
    existingButton.addEventListener('click', () => {
      alert(`Logged in as ${savedUsername}`);
    });
  }
});

// Form submission handling
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (checkbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert(`Logged in as ${username}`);
});

