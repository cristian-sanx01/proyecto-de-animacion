// Lista de URLs de imágenes
const imagenes = [
  "imagenes/img2.jpg",
  "imagenes/img3.jpg",
  "imagenes/img4.jpg",
  "imagenes/oferta.jpg",
];

let indice = 0;

// Crear contenedor
const contenedor = document.createElement("div");
contenedor.style.textAlign = "center";
contenedor.style.marginTop = "30px";
contenedor.style.fontFamily = "Arial";

// Crear imagen
const imagen = document.createElement("img");
imagen.src = imagenes[indice];
imagen.width = 600; // Ancho deseado
imagen.height = 300; // Altura deseada
imagen.alt = "Imagen del carrusel";
imagen.style.borderRadius = "10px";
imagen.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
imagen.style.objectFit = "cover"; // Para que recorte bien si la imagen no encaja
contenedor.appendChild(imagen);

// Agregar al body
document.body.appendChild(contenedor);

// Función que cambia la imagen automáticamente cada 3 segundos
setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  imagen.src = imagenes[indice];
}, 3000);
