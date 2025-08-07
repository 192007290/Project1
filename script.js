// ======== Show Login Form ========
function showLogin() {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('signup').style.display = 'none';
  document.getElementById('login').style.display = 'flex';
  window.scrollTo(0, 0);
}

// ======== Show Signup Form ========
function showSignup() {
  document.getElementById('homepage').style.display = 'none';
  document.getElementById('login').style.display = 'none';
  document.getElementById('signup').style.display = 'flex';
  window.scrollTo(0, 0);
}

// ======== Return to Homepage ========
function returnHome() {
  document.getElementById('homepage').style.display = 'block';
  document.getElementById('signup').style.display = 'none';
  document.getElementById('login').style.display = 'none';
  window.scrollTo(0, 0);
}

// ======== Country-Specific Dropdown (Places in India) ========
document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("country-select");
  const placesIndia = document.getElementById("places-india");

  function togglePlacesDropdown() {
    if (countrySelect.value === "India") {
      placesIndia.style.display = "block";
    } else {
      placesIndia.style.display = "none";
    }
  }

  // Run initially and when country changes
  togglePlacesDropdown();
  countrySelect.addEventListener("change", togglePlacesDropdown);

  // ======== Signup Form Submit Handler ========
  document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Account created successfully!');
    returnHome();
  });

  // ======== Login Form Submit Handler ========
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful!');
    returnHome();
  });

  // ======== Open Signup If Hash Is #signup ========
  if (window.location.hash === '#signup') {
    showSignup();
  }
});
