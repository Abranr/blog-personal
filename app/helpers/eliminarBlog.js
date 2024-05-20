export const eliminarBlog = () => {
  const tarjetaBlog = document.querySelectorAll(".blog");

  tarjetaBlog.forEach((tarjeta) => {
    tarjeta.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("deleteBlog")) {
        const id = e.target.parentElement.parentElement.id;
        // Obtener blogs del localStorage
        let dataBlogs = JSON.parse(localStorage.getItem("blogs"));

        // Encontrar el índice del blog a eliminar
        const blogIndex = dataBlogs.findIndex((blog) => blog.id == id);

        // Eliminar el blog del array
        dataBlogs.splice(blogIndex, 1);

        // Guardar el array actualizado en el localStorage
        localStorage.setItem("blogs", JSON.stringify(dataBlogs));

        // Recargar la página
        location.reload();
      }
    });
  });
};
