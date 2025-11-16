const loginBtn = document.getElementById('loginBtn');
const mensaje = document.getElementById('mensaje');

loginBtn.addEventListener('click', () => {
  const usuario = document.getElementById('usuario').value;
  const password = document.getElementById('password').value;

  // Datos de prueba
  const usuarioCorrecto = "yohe";
  const passwordCorrecto = "12345";

  if(usuario === usuarioCorrecto && password === passwordCorrecto) {
    mensaje.textContent = "¡Bienvenido!";
    mensaje.style.color = "lightgreen";

    // Redirigir a la otra página
    // OPCIÓN 1: si está en otra carpeta local
    // window.location.href = "../mi-proyecto/index.html";

    // OPCIÓN 2: si ya subiste a GitHub Pages
    window.location.href = "https://gclday-max.github.io/mi-proyecto/";
    
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos";
    mensaje.style.color = "red";
  }
});
