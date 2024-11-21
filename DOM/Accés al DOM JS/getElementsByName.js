// Selecciona todos los elementos con nombre 'username'
let usernameInputs = document.getElementsByName('username');
usernameInputs.forEach(input => {
  input.style.border = '2px solid blue';
});
