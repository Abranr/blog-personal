export const mostrarBlog = () => {
  const idBlog = localStorage.getItem("mostrarBlog");
  const dataBlogs = JSON.parse(localStorage.getItem("blogs"));
  const titulo = document.querySelector(".Nombre-blog");
  const contenido = document.querySelector("#blogContent");
  dataBlogs.forEach((element) => {
    if (element.id === idBlog) {
      titulo.value = element.title;
      contenido.innerHTML = element.content;
    }
  });
};
