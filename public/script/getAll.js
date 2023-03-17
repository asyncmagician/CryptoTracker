document.addEventListener('DOMContentLoaded', async () => {
  const loadingMessage = document.querySelector('#loading-message');
  const cryptoList = document.querySelector('#crypto-list');

  // Tant que ça charge, on affiche le message de chargement
  loadingMessage.style.display = 'block';

  // On récupère les données de notre propre api généré depuis la BDD
  const response = await fetch('/api/cryptos');
  const cryptos = await response.json();


  loadingMessage.style.display = 'none';

  // On créer chaque ligne du tableau pour chacune des données que l'on récupères
  cryptos.forEach((crypto) => {
    const tr = document.createElement('tr');

    const tdCrypto = document.createElement('td');
    tdCrypto.textContent = `${crypto.name} (${crypto.symbol.toUpperCase()})`;
    tr.appendChild(tdCrypto);

    const tdActions = document.createElement('td');

    const editButton = document.createElement('button');
    editButton.textContent = 'Modifier';
    editButton.addEventListener('click', () => {
      // .... A faire
    });
    tdActions.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
      // .... A faire
    });
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdActions);
    cryptoList.appendChild(tr);
  });

  const createButton = document.querySelector('#create-crypto');
  createButton.addEventListener('click', () => {
    window.location.href = '/create';
  });
  
});
