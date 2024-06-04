import { generateUUID } from "./idUnico";

document.addEventListener("DOMContentLoaded", function () {
  const formAgregarBlog = document.querySelector(".formulario");

  if (formAgregarBlog) {
    formAgregarBlog.addEventListener("submit", function (e) {
      e.preventDefault();
      const titulo = document.querySelector("#name").value;
      const contenido = document.querySelector("#msg").value;

      // Generar un id único
      const id = generateUUID()

      // Crear el objeto data con los valores del formulario
      const data = {
        id: id,
        title: titulo,
        content: contenido,
      };

      // Llamar a la función agregarBlog con el objeto data
      agregarBlog(data);
      formAgregarBlog.reset();
    });
  }
});

export function agregarBlog(data) {
  // Obtener los blogs existentes del localStorage
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Agregar el nuevo blog a la lista de blogs
  blogs.push(data);

  // Guardar la lista actualizada de blogs en el localStorage
  localStorage.setItem("blogs", JSON.stringify(blogs));

  console.log("Blog agregado:", data);
}
