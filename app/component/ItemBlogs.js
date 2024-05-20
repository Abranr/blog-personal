import { dataBlogs as initialDataBlogs } from "../../data/dataBlogs.js";

export const itemBlogs = (element) => {
  // Obtener blogs del localStorage o usar dataBlogs inicial
  const dataBlogs = JSON.parse(localStorage.getItem("blogs")) || initialDataBlogs;

  const tarjetaBlog = ` 
    <div class="blog" id="1">
      <h2>Titulo</h2>
      <p>Contenido</p>
      <div class="btn_group">
        <button class="editBlog">Editar</button>
        <button class="deleteBlog">Eliminar</button>
      </div>
    </div>
  `;

  element.innerHTML = dataBlogs
    .map((blog) => {
      return tarjetaBlog.replace("Titulo", blog.title).replace("Contenido", blog.content).replace("1", blog.id);
    })
    .join("");

  // Guardar en el localStorage si no existe
  if (!localStorage.getItem("blogs")) {
    localStorage.setItem("blogs", JSON.stringify(dataBlogs));
  }
};
