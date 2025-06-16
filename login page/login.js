document.addEventListener('DOMContentLoaded', function() {
    // ... (Your existing sticky navbar, dropdown, and search functionality) ...

    // --- Login Modal functionality ---
    const loginButton = document.querySelector('.navbar-right .login-button'); // Assuming you have a class 'login-button' on your login button in the navbar
    const loginModal = document.getElementById('loginModal');
    const closeButton = loginModal.querySelector('.close-button');
    const passwordInput = document.getElementById('password');
    const passwordToggle = loginModal.querySelector('.password-toggle');

    if (loginButton && loginModal && closeButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior if it's an <a> tag

            // Close any other open elements first (dropdowns, search bar)
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
            const searchOverlay = document.querySelector('.search-overlay');
            if (searchOverlay) {
                searchOverlay.style.display = 'none';
            }

            loginModal.style.display = 'flex'; // Show the modal using flex for centering
            document.body.style.overflow = 'hidden'; // Prevent scrolling of background content
        });

        closeButton.addEventListener('click', function() {
            loginModal.style.display = 'none'; // Hide the modal
            document.body.style.overflow = ''; // Restore scrolling
        });

        // Close modal if clicking outside the modal-content
        window.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        // Optional: Close modal if 'Escape' key is pressed
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && loginModal.style.display === 'flex') {
                loginModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Password Toggle Functionality
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            // Optionally change the eye icon:
            passwordToggle.textContent = (type === 'password') ? '\u{1F441}' : '\u{1F576}'; // unicode for eye and eye-slash
        });
    }
});



function togglePassword() {
  const password = document.getElementById("password");
  password.type = password.type === "password" ? "text" : "password";
}

function loginWithGoogle() {
  // Example: redirect to Google Auth, or just a placeholder for now
  window.location.href = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=768103839671-1alfdmpth9u6qo1nptir4e1oudd6dr7t.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftrack.wareiq.com%2Fauth%2Fsso%2Fv1%2Fgoogle_callback_login&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=FB3W0osL3rY4CBDZedKcCpOVXTSQq9&access_type=offline&prompt=select_account&service=lso&o2v=1&flowName=GeneralOAuthFlow";
}
