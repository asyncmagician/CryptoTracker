document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/cryptos');
    const cryptos = await response.json(); // Utilisez await response.json() au lieu de JSON.parse(response.headers.get('cryptos'));
    const cryptoList = document.querySelector('#crypto-list');
  
    // Cachez le message de chargement
    const loadingMessage = document.querySelector('#loading-message');
    loadingMessage.style.display = 'none';
  
    cryptos.forEach((crypto) => {
      const li = document.createElement('li');
      li.textContent = `${crypto.name} (${crypto.symbol.toUpperCase()})`;
      cryptoList.appendChild(li);
    });
  });
  