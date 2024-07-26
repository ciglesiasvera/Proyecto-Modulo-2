document.getElementById('payment-method').addEventListener('change', function () {
    const cardDetails = document.getElementById('card-details');
    const cardImage = document.getElementById('card-image');
    if (this.value === 'credit-card' || this.value === 'debit-card') {
        cardDetails.style.display = 'block';
        cardImage.style.display = 'block';
    } else {
        cardDetails.style.display = 'none';
        cardImage.style.display = 'none';
    }
});

document.getElementById('payment-method-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const method = document.getElementById('payment-method').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;

    // Validaciones
    if (!method) {
        document.getElementById('payment-error').innerText = "Debe seleccionar un método de pago.";
        document.getElementById('payment-error').style.display = "block";
        return;
    }

    if ((method === 'credit-card' || method === 'debit-card') && (!cardNumber || !expiryDate)) {
        document.getElementById('payment-error').innerText = "Debe ingresar los detalles de la tarjeta.";
        document.getElementById('payment-error').style.display = "block";
        return;
    }

    const cardNumberPattern = /^\d{16}$/;
    if ((method === 'credit-card' || method === 'debit-card') && !cardNumberPattern.test(cardNumber)) {
        document.getElementById('payment-error').innerText = "El número de tarjeta debe contener 16 dígitos.";
        document.getElementById('payment-error').style.display = "block";
        return;
    }

    // Simulación de pago exitoso
    document.getElementById('payment-success').innerText = "Pago realizado correctamente.";
    document.getElementById('payment-success').style.display = "block";
    document.getElementById('payment-error').style.display = "none";
    document.getElementById('payment-method-form').reset();
    document.getElementById('card-details').style.display = 'none';
    document.getElementById('card-image').style.display = 'none';
});