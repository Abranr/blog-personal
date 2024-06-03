import "./helpers/agregarBlog.js";
import { mostrarBlog } from "./helpers/mostrarBlog.js";
import { itemBlogs } from "./component/ItemBlogs.js";
import { eliminarBlog } from "./helpers/eliminarBlog.js";
import { editarBlog } from "./helpers/editarBlog.js";

document.addEventListener("DOMContentLoaded", () => {
  cargarNavbar();
  const contentBlog = document.querySelector(".items_blog");
  itemBlogs(contentBlog);
  eliminarBlog();
});

// JavaScript para hacer el navbar reutilizable
function cargarNavbar() {
  fetch("/pages/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });
}

// JavaScript para hacer el navbar reutilizable
// document.addEventListener("DOMContentLoaded", cargarNavbar);

document.addEventListener("DOMContentLoaded", function () {
  fetch("/pages/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });
});
mostrarBlog();
editarBlog();
