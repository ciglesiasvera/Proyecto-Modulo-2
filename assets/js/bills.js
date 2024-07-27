const conceptAmounts = {
    'matricula': 100000,
    'mensualidad': 50000,
    'cuota de curso':10000,
    'materiales':20000,
    
};

document.getElementById('concept').addEventListener('change', function() {
    const concept = this.value;
    document.getElementById('amount').value = conceptAmounts[concept] || '';
});

function showPreview() {
    const student = document.getElementById('student').value;
    const concept = document.getElementById('concept').value;
    const amount = document.getElementById('amount').value;
    if (student && concept && amount) {
        document.getElementById('preview-student').textContent = `Estudiante: ${student}`;
        document.getElementById('preview-concept').textContent = `Concepto: ${concept}`;
        document.getElementById('preview-amount').textContent = `Monto: ${amount}`;
        document.getElementById('receipt-preview').style.display = 'block';
    } else {
        alert('Todos los campos deben ser llenados antes de mostrar la vista previa.');
    }
}

document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const student = document.getElementById('student').value;
    const concept = document.getElementById('concept').value;
    const amount = document.getElementById('amount').value;
    if (student && concept && amount) {
        const receipt = `
            Recibo de Pago\n
            Estudiante: ${student}\n
            Concepto: ${concept}\n
            Monto: ${amount}
        `;
        const printWindow = window.open('', '', 'height=400,width=600');
        printWindow.document.write('<pre>' + receipt + '</pre>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    } else {
        alert('Todos los campos deben ser llenados antes de confirmar el pago.');
    }
});

