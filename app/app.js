// JavaScript para hacer el navbar reutilizable
function cargarNavbar() {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      });
  }
  
  document.addEventListener('DOMContentLoaded', cargarNavbar);
  