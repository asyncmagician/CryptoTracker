const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(signupForm);
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        window.location.href = '/?success=1';
    } else {
        console.log(response);
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while registering the user');
  }
});