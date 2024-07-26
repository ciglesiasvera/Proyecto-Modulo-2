$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        let isValid = true;
        let errorMessage = '';
        let successMessage = '';

        // Limpiar mensajes previos
        $('.error').remove();
        $('#formMessage').empty();

        const emailUsuario = $('#email').val().trim();
        if (emailUsuario === '') {
            isValid = false;
            $('#email').after('<span class="error">El correo electrónico es obligatorio.</span>');
        }

        const passwordUsuario = $('#password').val().trim();
        if (passwordUsuario === '') {
            isValid = false;
            $('#password').after('<span class="error">La contraseña es obligatoria.</span>');
        }

        if (isValid) {
            successMessage = '<p class="acepted">EL Email y el Password son correctas. Bienvenid@.</p>';
            $('#formMessage').html(successMessage);
        } else {
            errorMessage = '<p class="error">Por favor, verifica los datos ingresados.</p>';
            $('#formMessage').html(errorMessage);
        }
    
    
    
    
    
    
    
    
    });
});