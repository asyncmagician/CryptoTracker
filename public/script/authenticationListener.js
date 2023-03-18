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
        return response.text(); // on récupère le corps de la réponse comme une chaîne de caractères
      })
      .then(data => {
        console.log(data);
        // Vérifier si la réponse contient un token valide
        try {
          const parsedData = JSON.parse(data); // on tente de parser la réponse en JSON
          if (parsedData.token) {
            console.log(parsedData.token);
            // Stockez le token dans le local storage du navigateur du client
            localStorage.setItem('token', parsedData.token);
        
            // Redirigez l'utilisateur vers la page d'accueil ou la page de tableau de bord
            window.location.href = '/home';
          } else {
            const errorDiv = document.querySelector('#error');
            if (errorDiv) {
              errorDiv.innerHTML = 'The login is invalid.';
              errorDiv.classList.add('alert', 'alert-danger');
            }            
          }
        } catch (error) {
          console.error(error);
          const errorDiv = document.querySelector('#error');
          if (errorDiv) {
            errorDiv.innerHTML = 'The login is invalid.';
            errorDiv.classList.add('alert', 'alert-danger');
          }     
        }
      })
      .catch(error => {
        console.error(error);
        const errorDiv = document.querySelector('#error');
        if (errorDiv) {
          errorDiv.innerHTML = 'The login is invalid.';
          errorDiv.classList.add('alert', 'alert-danger');
        }
      });
    }); 
  }
}); 
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get('success');
  if (success === '1') {
    // Trouvez la div pour le message de succès
    const messageDiv = document.querySelector('#message');
  
    // Créez une nouvelle div pour le message de succès
    const successDiv = document.createElement('div');
    successDiv.classList.add('success');
    successDiv.textContent = 'You have been successfully registered';
  
    // Ajoutez la div au messageDiv
    messageDiv.appendChild(successDiv);
  }