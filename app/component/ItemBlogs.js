import { dataBlogs as initialDataBlogs } from "../../data/dataBlogs.js";

export const itemBlogs = (element) => {
  const dataBlogs = JSON.parse(localStorage.getItem("blogs")) || initialDataBlogs;

  const tarjetaBlog = `
    <div class="blog" id="{id}">
      <h2>{title}</h2>
      <p>{content}</p>
      <div class="btn_group">
        <a href="./pages/editarBlog.html" class="editBlog">Editar</a>
        <button class="deleteBlog">Eliminar</button>
      </div>
    </div>
  `;

  element.innerHTML = dataBlogs
    .map((blog) => {
      return tarjetaBlog.replace("{title}", blog.title).replace("{content}", blog.content).replace("{id}", blog.id);
    })
    .join("");

  // Guardar en el localStorage si no existe
  if (!localStorage.getItem("blogs")) {
    localStorage.setItem("blogs", JSON.stringify(dataBlogs));
  }
};
