import { itemBlogs } from "./component/ItemBlogs.js";
import { eliminarBlog } from "./helpers/eliminarBlog.js";

document.addEventListener("DOMContentLoaded", () => {
  cargarNavbar("/pages/navbar.html");
  const contentBlog = document.querySelector(".items_blog");
  itemBlogs(contentBlog);
  eliminarBlog();
});

// JavaScript para hacer el navbar reutilizable
function cargarNavbar(url) {
  fetch(url || "/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar el navbar:", error));
}
