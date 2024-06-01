import "./helpers/agregarBlog.js";
import { itemBlogs } from "./component/ItemBlogs.js";
import { eliminarBlog } from "./helpers/eliminarBlog.js";

document.addEventListener("DOMContentLoaded", () => {
  cargarNavbar();
  const contentBlog = document.querySelector(".items_blog");
  if (contentBlog) {
    itemBlogs(contentBlog);
  }
  eliminarBlog();
  // agregarBlog();
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
