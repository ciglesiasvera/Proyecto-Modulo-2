function loadContent(url) {
    // Realizar la solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Cargar el contenido en el contenedor
                document.getElementById('dynamicContent').innerHTML = xhr.responseText;

                // Ejecutar scripts del contenido cargado
                var scripts = document.getElementById('dynamicContent').getElementsByTagName('script');
                for (var i = 0; i < scripts.length; i++) {
                    eval(scripts[i].innerHTML);
                }
            } else {
                console.error('Error al cargar el contenido: ' + xhr.status);
            }
        }
    };
    xhr.send();

    // Resaltar el enlace activo
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });
    var activeLink = document.querySelector(`a[href='#'][onclick="loadContent('${url}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}