const formAgregarBlog = document.querySelector(".formulario");

formAgregarBlog.addEventListener("submit", function (e) {
  e.preventDefault();
  const titulo = document.querySelector("#name").value;
  const contenido = document.querySelector("#msg").value;
  console.log(titulo);
  console.log(contenido);

  // Generar un id único
  const id = Date.now().toString();

  // Crear el objeto data con los valores del formulario
  const data = {
    id: id,
    titulo: titulo,
    contenido: contenido,
  };

  // Llamar a la función agregarBlog con el objeto data
  agregarBlog(data);
  formAgregarBlog.reset();
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
