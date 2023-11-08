
/*EFECTO SLIDER OVERLAY*/

const overlay=document.querySelector('.main__overlay')
const motos=document.querySelectorAll('.main__imagenes')
const indicadores=document.querySelectorAll('.indicadores span') 
const imagenOverlay=document.querySelector('.overlay__imagen') 
const parrafoOverlay=document.querySelector('.overlay__parrafo')
const cerrarOverlay=document.querySelector('.cerrar')
const flechaOverlayIzquierda=document.querySelector('.flecha-overlay-izquierda')
const flechaOverlayDerecha=document.querySelector('.flecha-overlay-Derecha') 
 let indexActual=0

 function mostrarPosicion(index) { 

	if(index<0){
		index=motos.length-1 
	} 

	else if(index>=motos.length){
		index=0
	}
	 
	const imagenConectada=motos[index].querySelector('img').src 
	const parrafoConectado=motos[index].querySelector('.imagen-parrafo').textContent 

	imagenOverlay.src=imagenConectada 
	parrafoOverlay.textContent=parrafoConectado 

	indexActual=index 
 }  

   motos.forEach((moto,index)=>{
	moto.addEventListener('click',()=>{
		mostrarPosicion(index) 
		overlay.classList.add('overlay-active')
	})
   })
  
    cerrarOverlay.addEventListener('click',()=>{
		overlay.classList.remove('overlay-active')
	})


    flechaOverlayIzquierda.addEventListener('click',()=>{
		mostrarPosicion(indexActual-1)
	})


    flechaOverlayDerecha.addEventListener('click',()=>{
		mostrarPosicion(indexActual+1)
	})

 

	    if(motos.length>0){
			mostrarPosicion(0)
		} 

	/*=======================================================================================================*/

  /*EFECTO SLIDER MOTOS Y BOTONES*/


const contenedor=document.querySelector('.main__contenido')
const imgMotos=document.querySelectorAll('.main__imagenes')
const flechaIzquierda=document.querySelector('.flecha-izquierda')
const flechaDerecha=document.querySelector('.flecha-derecha')  

flechaDerecha.addEventListener('click',()=>{
	 
	contenedor.scrollLeft+=contenedor.offsetWidth 

	const indicadores=document.querySelector('.indicadores') 

	if(indicadores.nextSibling){
		indicadores.nextSibling.classList.add('activo')
		indicadores.classList.remove('activo')
	} 
	
})  



  flechaIzquierda.addEventListener('click',()=>{
	 
	contenedor.scrollLeft-=contenedor.offsetWidth 

	const indicadores=document.querySelector('.indicadores') 

	if(indicadores.previousSibling){
		indicadores.previousSibling.classList.add('activo')
		indicadores.classList.remove('activo')
	} 

})  
 

const manualPaginas=Math.ceil(imgMotos.length/5) 

for(let i=0;i<manualPaginas;i++){ 

	const indicador=document.createElement('button')
 
	 if(i===0){
		indicador.classList.add('activo')
	 } 

	  document.querySelector('.indicadores').appendChild(indicador) 



	  indicador.addEventListener('click',(e)=>{
		contenedor.scrollLeft= i* contenedor.offsetWidth  

		document.querySelector('.indicadores .activo').classList.remove('activo')
		e.target.classList.add('activo')

		
	  })
} 

/*EFECTO APARCION PARRAFOS*/ 
  
 const parrafo1=document.querySelector('.main__Parrafo-1')
 const parrafo2=document.querySelector('.main__Parrafo-2')
 

    function aparecerParrafos() { 

		setTimeout(() => { 

			parrafo1.classList.add('activacion')
			parrafo2.classList.add('activacion')
		}, 3000);
		
	}
    
	 document.addEventListener('DOMContentLoaded',aparecerParrafos) 



/*EFECTO SCROLL*/


/// Selecciona las imágenes del slider de abajo
const sliderImages = document.querySelectorAll('.main__imagenes');

// Agrega un evento de clic a cada imagen del slider de abajo
sliderImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    // Muestra la imagen correspondiente en el overlay
    mostrarPosicion(index);

    // Calcula la posición de la imagen en el overlay
    const overlayPosition = imagenOverlay.getBoundingClientRect().top;

    // Aumenta la cantidad de desplazamiento hacia arriba (ajusta el valor según tus preferencias)
    const scrollDistance = window.scrollY + overlayPosition - 50; // Aumenté 100 para desplazamiento adicional

    // Realiza un desplazamiento suave hasta la posición del overlay
    scrollToSmoothly(scrollDistance, 2000); // Puedes ajustar la duración (1000ms) según tus preferencias

    // Muestra el overlay
    overlay.classList.add('overlay-active');
  });
});

// Función para desplazarse suavemente
function scrollToSmoothly(position, duration) {
  const startingY = window.scrollY;
  const diff = position - startingY;
  let start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}
