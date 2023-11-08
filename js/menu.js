
const Submenu=document.querySelector('.menu__show') 
const btnActivacion=document.querySelector('.header__activacion1') 

const btnActivacion2=document.querySelector('.header__activacion2') 
const Submenu2=document.querySelector('.menu__show-2') 

const abrirMenu=document.querySelector('.iconMenu')
const cerrarMenu=document.querySelector('.iconCerrar')
const Menu=document.querySelector('.header__nav')

btnActivacion.addEventListener('click',(e)=>{ 
    e.preventDefault()
    
    Submenu.classList.toggle('menu__show-active')
    Submenu.classList.toggle('menu__show')
  
}) 

btnActivacion2.addEventListener('click',(e)=>{ 
    e.preventDefault()
    
    Submenu2.classList.toggle('menu__show2-active')
    Submenu2.classList.toggle('menu__show-2')
  
}) 

abrirMenu.addEventListener('click',()=>{
    Menu.classList.add('header__nav-active')
    
})

 cerrarMenu.addEventListener('click',()=>{
    Menu.classList.remove('header__nav-active')
    
}) 


/*EFECTO DE ESCRITURA*/ 



const parrafo22=document.querySelector('.main__parrafos') 
const nuevoParrafo=parrafo22.textContent 
parrafo22.textContent='' 

let i=0 

  const intervale=setInterval(() => { 

	parrafo22.textContent+=nuevoParrafo[i];i++ 

	if(i===nuevoParrafo.length){
	   clearInterval(intervale)
	}
   
  },200);