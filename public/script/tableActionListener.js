document.addEventListener('DOMContentLoaded', async () => {
  const loadingMessage = document.querySelector('#loading-message');
  const cryptoList = document.querySelector('#crypto-list');
  const createButton = document.querySelector('#create-crypto');

  loadingMessage.style.display = 'block';

  const response = await fetch('/api/cryptos');
  const cryptos = await response.json();


  loadingMessage.style.display = 'none';

  cryptos.forEach((crypto) => {
    const tr = document.createElement('tr');

    const tdCrypto = document.createElement('td');
    tdCrypto.textContent = `${crypto.name} (${crypto.symbol.toUpperCase()})`;
    tr.appendChild(tdCrypto);

    const tdActions = document.createElement('td');

    const editButton = document.createElement('button');
    editButton.classList.add('button-update');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      window.location.href = `/update?id=${crypto._id}`;
    });
    tdActions.appendChild(editButton);
    

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('button-delete');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      const confirmed = confirm('If you press OK, the cryptocurrency will be deleted forever.');
      if (confirmed) {
        fetch(`/api/delete/${crypto._id}`, {
          method: 'DELETE',
        }).then(response => {
          if (response.ok) {
            tr.remove();
          } else {
            throw new Error();
          }
        }).catch(error => {
          console.error(error);
          alert('An error appeared while deleting the cryptocurrency');
        });
      }
    });
    

    tdActions.appendChild(deleteButton);
    

    tr.appendChild(tdActions);
    cryptoList.appendChild(tr);
  });

  createButton.classList.remove('hidden');
  createButton.addEventListener('click', () => {
    window.location.href = '/create';
  });
});
