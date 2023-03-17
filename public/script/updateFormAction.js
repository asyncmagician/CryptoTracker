const urlParams = new URLSearchParams(window.location.search);
const cryptoId = urlParams.get('id');
const form = document.querySelector('#update-crypto-form');

fetch(`/api/cryptos/${cryptoId}`)
  .then(response => response.json())
  .then(crypto => {
    const { name, symbol, marketCap, price } = crypto;
    document.querySelector('#id').value = cryptoId;
    document.querySelector('#name').value = name;
    document.querySelector('#symbol').value = symbol;
    document.querySelector('#marketCap').value = marketCap;
    document.querySelector('#price').value = price;
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred while fetching the cryptocurrency');
  });

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const symbol = document.querySelector('#symbol').value;
  const marketCap = document.querySelector('#marketCap').value;
  const price = document.querySelector('#price').value;

  fetch(`/update/${cryptoId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      symbol,
      marketCap,
      price,
    }),
  }).then(response => {
    if (response.ok) {
      window.location.href = '/home';
    } else {
      throw new Error();
    }
  }).catch(error => {
    console.error(error);
    alert('An error occurred while updating the cryptocurrency');
  });
});
