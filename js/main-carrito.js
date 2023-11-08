
let productos=[]; 

fetch('js/carrito.json') 

.then(response=>response.json())

.then(data=>{
  productos=data 
  
  cargarProductos(productos)
})



const contenedorProductos = document.querySelector('.contenedor__productos');
const botonesCategoria = document.querySelectorAll('.botones__categoria');
let botonesAgregar = document.querySelectorAll('.producto__agregar');
const titulo = document.querySelector('.titulo-principal');
const numerito = document.getElementById('numerito');
const asire = document.querySelector('asire__carrito');
const contenedorProductoAgregado=document.querySelector('.contenedor__producto-agregado')

botonesCategoria.forEach(boton => {
  boton.addEventListener('click', () => {
    asire.classList.remove('asire-visible');
  });
});

function cargarProductos(elegirProductos) {
  contenedorProductos.innerHTML = '';

  elegirProductos.forEach(producto => { // Cambié "productos" a "producto" aquí
    const bloque = document.createElement('div');
    bloque.classList.add('contenedor__producto-agregado');
    bloque.innerHTML = `
      <img src="${producto.imagen}" class="producto__imagen" alt="${producto.titulo}">
      <h3 class="producto__titulo">${producto.titulo}</h3>
      <p class="producto__precio">$${producto.precio}</p>
      <button class="producto__agregar" id="${producto.id}">agregar</button>
    `;
    contenedorProductos.appendChild(bloque);
  });

  actualizarBotones();
}

botonesCategoria.forEach(boton => {
  boton.addEventListener('click', (e) => {
    botonesCategoria.forEach(boton => boton.classList.remove('activo'));
    e.currentTarget.classList.add('activo');

    if (e.currentTarget.id !== 'todos') {
      const productoObtenido = productos.find(producto => producto.categorias.id === e.currentTarget.id);
      titulo.innerHTML = productoObtenido.categorias.nombre;

      const productoBoton = productos.filter(producto => producto.categorias.id === e.currentTarget.id);

      cargarProductos(productoBoton);
    } else {
      titulo.textContent = 'Todos los productos';
      cargarProductos(productos);
    }
  });
});

function actualizarBotones() {
  let botonesAgregar = document.querySelectorAll('.producto__agregar').forEach(boton => {
    boton.addEventListener('click', agregarProductos);
  });
}

let productosEnCarrito;
let productoEnLS = localStorage.getItem('productos-en-carrito');

if (productoEnLS) {
  productosEnCarrito = JSON.parse(productoEnLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}


function agregarProductos(e) { 
  const idBoton=e.currentTarget.id
  const productoJSON=productos.find(producto=>producto.id===idBoton)
  const productoCarrito=productosEnCarrito.find(producto=>producto.id===idBoton)

  if(productoJSON && productoJSON.stock>0){

    if(productoCarrito){

      if(productoCarrito.cantidad<10){
        productoCarrito.cantidad++
        productoJSON.stock--
      }
    } 

    else{
      productosEnCarrito.push({...productoJSON,cantidad:1}) 
      productoJSON.stock--
    } 

     actualizarNumerito()
     localStorage.setItem('productos-en-carrito',JSON.stringify(productosEnCarrito)) 

     if(productoJSON.stock===0){

      const nuevoProducto=document.querySelector(`#${idBoton}`)
      const contenedorProduC=nuevoProducto.closest('.contenedor__producto-agregado')
      contenedorProduC.classList.add('active')
     } 

     else{ 
      const nuevoProducto=document.querySelector(`#${idBoton}`)
      const contenedorProduC=nuevoProducto.closest('.contenedor__producto-agregado')
      contenedorProduC.classList.remove('active')

     }
  }
  
}



function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad,0);
  numerito.innerText = nuevoNumerito;
}


