const formAgregarBlog = document.querySelector(".formulario");

formAgregarBlog.addEventListener("submit", function (e) {
  e.preventDefault();
  const titulo = document.querySelector("#name").value;
  const contenido = document.querySelector("#msg").value;
  console.log(titulo);
  console.log(contenido);

  // agregarBlog(titulo);
  formAgregarBlog.reset();
});
export function agregarBlog(data) {
  

}
