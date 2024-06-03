import { dataBlogs as initialDataBlogs } from "../../data/dataBlogs.js";

export const itemBlogs = (element) => {
  const dataBlogs = JSON.parse(localStorage.getItem("blogs")) || initialDataBlogs;
  const tarjetaBlog = `
    <a class="blog" id="{id}" href="./pages/mostrarBlog.html">
      <h2>{title}</h2>
      <p>{content}</p>
      <div class="btn_group">
        <button class="deleteBlog">Eliminar</button>
      </div>
    </a>
  `;

  if (dataBlogs.length === 0) {
    element.innerHTML = "<h2>No hay blogs</h2>";
    return;
  }

  element.innerHTML = dataBlogs
    .map((blog) => {
      return tarjetaBlog.replace("{title}", blog.title).replace("{content}", blog.content).replace("{id}", blog.id);
    })
    .join("");

  // Guardar en el localStorage si no existe
  if (!localStorage.getItem("blogs")) {
    localStorage.setItem("blogs", JSON.stringify(dataBlogs));
  }

  const blogs = element.querySelectorAll(".blog");
  blogs.forEach((blog) => {
    blog.addEventListener("click", (e) => {
      e.preventDefault();
      const blogId = blog.id;
      localStorage.setItem("mostrarBlog", blogId); // Guardar el ID del blog a editar
      window.location.href = blog.href; // Navegar a la página de editar
    });
    const contenido = blog.querySelector("p").textContent;
    const contenidoAbreviado = contenido.slice(0, 100) + "...";
    blog.querySelector("p").textContent = contenidoAbreviado;
  });
};
