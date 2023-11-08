const formulario=document.querySelector('#formulario')
const inpuTT=document.querySelectorAll('#formulario input')

const expresiones={
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
} 

const campos={ 
    usuario: false,
	  nombre: false,
	  password: false,
	  correo: false,
	  telefono:false

} 

  function validarFormulario(e){

    switch(e.target.name){

        case'usuario':
        validarCampos(expresiones.usuario, e.target ,'usuario') 
        break

        case'nombre':
        validarCampos(expresiones.nombre, e.target ,'nombre')
        break
    
        case'password':
        validarCampos(expresiones.password, e.target ,'password')
        validarContraseña()
        break  

        case'password2':
        validarContraseña()
        break   

        case'correo':
        validarCampos(expresiones.correo,e.target ,'correo')
      
        break   

        case'telefono':
        validarCampos(expresiones.telefono,e.target ,'telefono')
      
        break   
    } 
  } 

     function validarCampos(expresion,input,campo) { 

        if(expresion.test(input.value)){

             document.querySelector(`#formulario__${campo}`).classList.add('grupo__acceso')
             document.querySelector(`#formulario__${campo}`).classList.remove('grupo__denegado')
             document.querySelector(`#formulario__${campo} i`).classList.add('fa-check-circle')
             document.querySelector(`#formulario__${campo} i`).classList.remove('fa-times-circle')
             document.querySelector(`#formulario__${campo} .formulario__mensaje`).classList.remove('formulario__mensaje-activo')
             campos[campo]=true

        }  

        else{ 
            document.querySelector(`#formulario__${campo}`).classList.remove('grupo__acceso')
            document.querySelector(`#formulario__${campo}`).classList.add('grupo__denegado')
            document.querySelector(`#formulario__${campo} i`).classList.remove('fa-check-circle')
            document.querySelector(`#formulario__${campo} i`).classList.add('fa-times-circle')
            document.querySelector(`#formulario__${campo} .formulario__mensaje`).classList.add('formulario__mensaje-activo')
            campos[campo]=false

        }
        
     }  

      function validarContraseña(){ 
        const contraseña1=document.getElementById('password')
        const contraseña2=document.getElementById('password2') 

        if(contraseña1.value!=contraseña2.value){ 
            document.querySelector('#formulario__password2').classList.remove('grupo__acceso')
            document.querySelector('#formulario__password2').classList.add('grupo__denegado')
            document.querySelector('#formulario__password2 i').classList.remove('fa-check-circle')
            document.querySelector('#formulario__password2 i').classList.add('fa-times-circle')
            document.querySelector('#formulario__password2 .formulario__mensaje').classList.add('formulario__mensaje-activo')
            campos['password']=false


        } 

        else{
            document.querySelector('#formulario__password2').classList.add('grupo__acceso')
            document.querySelector('#formulario__password2').classList.remove('grupo__denegado')
            document.querySelector('#formulario__password2 i').classList.add('fa-check-circle')
            document.querySelector('#formulario__password2 i').classList.remove('fa-times-circle')
            document.querySelector('#formulario__password2 .formulario__mensaje').classList.remove('formulario__mensaje-activo')
            campos['password']=true
        }



      } 

       inpuTT.forEach(input=>{
        input.addEventListener('keyup',validarFormulario)
        input.addEventListener('blur',validarFormulario)
       }) 

        
       formulario.addEventListener('submit',(e)=>{

         e.preventDefault() 


         const terminos=document.getElementById('terminos') 

         if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
            formulario.reset() 

             document.getElementById('mensaje__enviado').classList.add('mensaje__enviado-activo') 

             setTimeout(() => { 
                document.getElementById('mensaje__enviado').classList.remove('mensaje__enviado-activo') 
                
             }, 5000); 

              document.querySelectorAll('.grupo__acceso').forEach(iconos=>{
                iconos.classList.remove('grupo__acceso')
              }) 

              document.getElementById('mensaje__error').classList.remove('mensaje__error-activo')
         } 

          else{
            document.getElementById('mensaje__error').classList.add('mensaje__error-activo')
          }
       })