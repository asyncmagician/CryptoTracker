const createCryptoForm = document.querySelector('#create-crypto-form');
createCryptoForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(createCryptoForm);
  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  const response = await fetch('/api/create', requestOptions);
  const result = await response.text();

  if (response.status === 200) {
    alert('Crypto ajoutée avec succès !');
    window.location.href = '/home'; 
  } else {
    alert(`Erreur lors de l'ajout de la crypto : ${result}`);
  }
});
