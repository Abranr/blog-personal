const formAgregarBlog = document.querySelector(".formulario");

formAgregarBlog.addEventListener("submit", function (e) {
  e.preventDefault();
  const titulo = document.querySelector("#name").value;
  const contenido = document.querySelector("#msg").value;
  console.log(titulo);
  console.log(contenido);

  // const data = {
  //   id: // Generar un id único, // Rodrigo
  //   titulo: // Obtener el valor del input de titulo, // Andre
  //   contenido: // Obtener el valor del input de contenido, // Andre
  // };

  // agregarBlog(data);
  formAgregarBlog.reset();
});
export function agregarBlog(data) {
  // Andre agregar el blog al localStorage
}
