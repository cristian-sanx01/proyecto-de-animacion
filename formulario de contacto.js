// Crear formulario
const formulario = document.createElement("form");
formulario.style.margin = "30px";
formulario.style.fontFamily = "Arial";

// Campo: Nombre
const labelNombre = document.createElement("label");
labelNombre.textContent = "Nombre:";
const inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.id = "nombre";
inputNombre.style.margin = "5px";

formulario.appendChild(labelNombre);
formulario.appendChild(document.createElement("br"));
formulario.appendChild(inputNombre);
formulario.appendChild(document.createElement("br"));
formulario.appendChild(document.createElement("br"));

// Campo: Correo
const labelCorreo = document.createElement("label");
labelCorreo.textContent = "Correo:";
const inputCorreo = document.createElement("input");
inputCorreo.type = "email";
inputCorreo.id = "correo";
inputCorreo.style.margin = "5px";

formulario.appendChild(labelCorreo);
formulario.appendChild(document.createElement("br"));
formulario.appendChild(inputCorreo);
formulario.appendChild(document.createElement("br"));
formulario.appendChild(document.createElement("br"));

// Botón
const boton = document.createElement("button");
boton.type = "submit";
boton.textContent = "Enviar";
boton.style.padding = "8px 15px";
formulario.appendChild(boton);

// Mensaje
const mensaje = document.createElement("p");
mensaje.style.fontWeight = "bold";

// Agregar todo al body
document.body.appendChild(formulario);
document.body.appendChild(mensaje);

// Validación
formulario.addEventListener("submit", function(e) {
  e.preventDefault(); // evitar que recargue

  const nombre = inputNombre.value.trim();
  const correo = inputCorreo.value.trim();

  if (nombre === "" || correo === "") {
    mensaje.textContent = "❌ Por favor, completa todos los campos.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "✅ Formulario enviado correctamente.";
    mensaje.style.color = "green";
    formulario.reset();
  }
});
