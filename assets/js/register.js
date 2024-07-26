document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Limpia los mensajes de error
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.textContent = '');

    // Obtiene los valores de los campos
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Variables para controlar los errores
    let hasError = false;

    // Validación de campos vacíos
    if (!fullName) {
        document.getElementById('fullNameError').textContent = 'El nombre completo es obligatorio.';
        hasError = true;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'El correo electrónico es obligatorio.';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'El correo electrónico no es válido.';
        hasError = true;
    }
    if (!password) {
        document.getElementById('passwordError').textContent = 'La contraseña es obligatoria.';
        hasError = true;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Las contraseñas no coinciden';
        hasError = true;
    }

    // Si no hay errores, muestra el mensaje de confirmación y limpia el formulario
    if (!hasError) {
        alert('Usuario registrado correctamente.');
        document.getElementById('registrationForm').reset();
    }
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}