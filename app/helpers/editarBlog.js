const btnEditar = document.querySelector(".Btn");
const titulo = document.querySelector(".Nombre-blog");
const contenido = document.querySelector("#blogContent");
export const editarBlog = () => {
  btnEditar.addEventListener("click", (e) => {
    titulo.removeAttribute("disabled");
    contenido.removeAttribute("disabled");
    const btnGuardar = document.createElement("button");
    btnGuardar.textContent = "Guardar";
    btnGuardar.classList.add("Btn");
    btnGuardar.addEventListener("click", () => {
      const idBlog = localStorage.getItem("mostrarBlog");
      const dataBlogs = JSON.parse(localStorage.getItem("blogs"));
      dataBlogs.forEach((element) => {
        if (element.id === idBlog) {
          element.title = titulo.value;
          element.content = contenido.value;
          localStorage.setItem("blogs", JSON.stringify(dataBlogs));
        }
      });
      titulo.setAttribute("disabled", true);
      contenido.setAttribute("disabled", true);
      btnGuardar.remove();
    });
    btnEditar.after(btnGuardar);
  });
};
