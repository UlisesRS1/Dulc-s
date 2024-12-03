document.querySelectorAll('.btn-outline-primary').forEach(button => {
    button.addEventListener('click', function() {
        // Alternar la clase 'active' en el botón clickeado
        this.classList.toggle('active');

        // Cuando un botón se active, el otro debe desactivarse
        if (this.classList.contains('active')) {
            // Desactivar el otro botón
            document.querySelectorAll('.btn-outline-secondary').forEach(btn => {
                btn.classList.remove('active');
            });
        }
    });
});

document.querySelectorAll('.btn-outline-secondary').forEach(button => {
    button.addEventListener('click', function() {
        // Alternar la clase 'active' en el botón clickeado
        this.classList.toggle('active');

        // Cuando un botón se active, el otro debe desactivarse
        if (this.classList.contains('active')) {
            // Desactivar el otro botón
            document.querySelectorAll('.btn-outline-primary').forEach(btn => {
                btn.classList.remove('active');
            });
        }
    });
});
