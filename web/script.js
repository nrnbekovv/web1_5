(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function validatePasswordMatch() {
          if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords must match");
          } else {
            confirmPassword.setCustomValidity("");
          }
        }

        password.addEventListener("input", validatePasswordMatch);
        confirmPassword.addEventListener("input", validatePasswordMatch);
