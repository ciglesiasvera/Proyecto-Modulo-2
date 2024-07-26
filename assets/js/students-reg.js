document.getElementById('student-register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('student-name').value;
    const dob = document.getElementById('student-dob').value;
    const address = document.getElementById('student-address').value;
    const phone = document.getElementById('student-phone').value;
    const email = document.getElementById('student-email').value;
    const grade = document.getElementById('student-grade').value;
    const section = document.getElementById('student-section').value;

    // Validaciones adicionales
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('student-register-error').innerText = "El teléfono debe contener solo números y tener 10 dígitos.";
        document.getElementById('student-register-error').style.display = "block";
        return;
    }
    // Validacion de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('student-register-error').innerText = "Ingrese un correo electrónico válido.";
        document.getElementById('student-register-error').style.display = "block";
        return;
    }

    // Simulación de registro exitoso
    document.getElementById('student-register-success').innerText = "Estudiante registrado correctamente.";
    document.getElementById('student-register-success').style.display = "block";
    document.getElementById('student-register-form').reset();
});
