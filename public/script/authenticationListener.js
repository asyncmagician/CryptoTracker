document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
    
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = '/home';
      });
    }
});
