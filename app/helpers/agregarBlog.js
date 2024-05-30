const formAgregarBlog = document.querySelector(".formulario");

formAgregarBlog.addEventListener("submit", function (e) {
  e.preventDefault();
  const titulo = document.querySelector("#name").value;
  console.log(titulo);

  // agregarBlog(titulo);
  formAgregarBlog.reset();
});
export function agregarBlog(data) {}
