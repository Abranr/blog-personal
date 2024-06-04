document.addEventListener("DOMContentLoaded", function () {
  const formAgregarBlog = document.querySelector(".formulario");
  function generateUUID() {
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }
  if (formAgregarBlog) {
    formAgregarBlog.addEventListener("submit", function (e) {
      e.preventDefault();
      const titulo = document.querySelector("#name").value;
      const contenido = document.querySelector("#msg").value;

      // Generar un id único
      const id = generateUUID();

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
