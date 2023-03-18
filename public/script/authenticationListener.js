document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        // Vérifier si la réponse contient un token valide
        if (data.token) {
          // Stockez le token dans le local storage du navigateur du client
          localStorage.setItem('token', data.token);
      
          // Redirigez l'utilisateur vers la page d'accueil ou la page de tableau de bord
          window.location.href = '/home';
        } else {
          const errorDiv = document.querySelector('#error');
          if (errorDiv) {
            errorDiv.innerHTML = 'The login is invalid.';
            errorDiv.classList.add('alert', 'alert-danger');
          }            
        }
      })
      .catch(error => {
        const errorDiv = document.querySelector('#error');
        if (errorDiv) {
          errorDiv.innerHTML = 'The login is invalid.';
          errorDiv.classList.add('alert', 'alert-danger');
        }
        console.error(error);      
      });
    });      
  }})