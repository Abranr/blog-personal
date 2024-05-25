// JavaScript para hacer el navbar reutilizable
function cargarNavbar() {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      });
  }
  
  // JavaScript para hacer el navbar reutilizable
  document.addEventListener('DOMContentLoaded', cargarNavbar);
 
    document.addEventListener("DOMContentLoaded", function() {
      fetch('/pages/footer.html')
        .then(response => response.text())
        .then(data => {
          document.querySelector('footer').innerHTML = data;
        });
    });
 