function loadHTML(elementId, filePath) {
  const basePath = window.location.origin; // Obtiene la base de la URL actual
  const fullPath = `${basePath}/${filePath}`; // Construye la ruta completa
  fetch(fullPath)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.text();
    })
    .then(data => document.getElementById(elementId).innerHTML = data)
    .catch(error => console.error('Error al cargar el archivo:', error));
}

// Carga del NavBar y del Footer
loadHTML('navbar', 'html/navbar.html');
loadHTML('footer', 'html/footer.html');
