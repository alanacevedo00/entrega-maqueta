const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'usuario' && password === '123') {
    window.location.href = 'home.html';
  } else {
    alert('Credenciales inválidas');
  }
})

const conversor = document.getElementById('convertirBtn').addEventListener('click', convertir);
