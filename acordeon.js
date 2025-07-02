const carrito = document.getElementById('carrito');
const listaCarrito = document.getElementById('lista-carrito');

function toggleCarrito() {
  carrito.classList.toggle('activo');
}

function vaciarCarrito() {
  listaCarrito.innerHTML = '';
}

const datos = [
  {
    titulo: 'Baños y Peluquería',
    imagen: 'perro1.jpg',
    descripcion: 'Higiene y estética profesional para tu mascota.',
    precio: 'B/. 15.00'
  },
  {
    titulo: 'Adiestramiento',
    imagen: 'gato1.jpg',
    descripcion: 'Obediencia, socialización y control de conducta.',
    precio: 'B/. 25.00'
  },
  {
    titulo: 'Veterinaria',
    imagen: 'ave1.jpg',
    descripcion: 'Atención médica integral para mascotas.',
    precio: 'B/. 30.00'
  }
];

const acordeon = document.getElementById('acordeon-container');

datos.forEach(dato => {
  const item = document.createElement('div');
  item.className = 'item';

  const titulo = document.createElement('div');
  titulo.className = 'titulo';
  titulo.textContent = dato.titulo;

  const contenido = document.createElement('div');
  contenido.className = 'contenido';

  const img = document.createElement('img');
  img.src = dato.imagen;
  img.alt = dato.titulo;

  const texto = document.createElement('div');
  texto.className = 'texto';

  const nombre = document.createElement('h3');
  nombre.textContent = dato.titulo;

  const descripcion = document.createElement('p');
  descripcion.textContent = dato.descripcion;

  const precio = document.createElement('p');
  precio.textContent = dato.precio;

  const boton = document.createElement('button');
  boton.className = 'boton';
  boton.textContent = 'Agregar al carrito';

  texto.appendChild(nombre);
  texto.appendChild(descripcion);
  texto.appendChild(precio);
  texto.appendChild(boton);

  contenido.appendChild(img);
  contenido.appendChild(texto);

  titulo.addEventListener('click', () => {
    item.classList.toggle('activo');
  });

  item.appendChild(titulo);
  item.appendChild(contenido);
  acordeon.appendChild(item);
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('boton')) {
    const producto = e.target.closest('.contenido');
    const nombre = producto.querySelector('h3').textContent;
    const precio = producto.querySelectorAll('p')[1]?.textContent || 'Sin precio';

    const item = document.createElement('li');
    item.textContent = `${nombre} - ${precio}`;

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'X';
    eliminarBtn.classList.add('eliminar-item');
    eliminarBtn.onclick = () => item.remove();

    item.appendChild(eliminarBtn);
    listaCarrito.appendChild(item);
  }
});
