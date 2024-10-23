function loadHTML(elementId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => document.getElementById(elementId).innerHTML = data);
  }
  
  // Carga del NavBar y del Footer
  loadHTML('navbar', 'html/navbar.html');
  loadHTML('footer', 'html/footer.html');
  