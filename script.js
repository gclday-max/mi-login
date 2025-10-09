const usuarios = [
  {usuario: "yohe", password: "12345"},
  {usuario: "camila", password: "abcd"},
  {usuario: "melany", password: "xyz"}
];

const togglePassword = document.getElementById('togglePassword');
togglePassword.addEventListener('click', () => {
  const passwordInput = document.getElementById('password');
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});

document.getElementById('loginBtn').addEventListener('click', () => {
  const usuario = document.getElementById('usuario').value.trim();
  const password = document.getElementById('password').value.trim();
  const mensaje = document.getElementById('mensaje');

  if (!usuario || !password) {
    mensaje.textContent = "❌ Completa todos los campos";
    mensaje.style.color = "red";
    return;
  }

  const valido = usuarios.find(u => u.usuario === usuario && u.password === password);
  if (valido) {
    mensaje.textContent = "✅ Bienvenido!";
    mensaje.style.color = "lightgreen";
    window.location.href = "https://gclday-max.github.io/mi-proyecto/"; 
  } else {
    mensaje.textContent = "❌ Usuario o contraseña incorrectos";
    mensaje.style.color = "red";
  }
});

