const tarjeta=document.querySelector('#tarjeta')
const formulario=document.querySelector('#formulario-tarjeta')
const abrirBoton=document.querySelector('#btn-abrir-formulario') 
const numeroTarjeta=document.querySelector('#tarjeta .numero')
const nombreTarjeta=document.querySelector('#tarjeta .nombre')
const expedicionMes=document.querySelector('#tarjeta .mes')
const expedicionAño=document.querySelector('#tarjeta .year')
const firma=document.querySelector('#tarjeta .firma')
const ccv=document.querySelector('#tarjeta .ccv') 
const logoDeMarca=document.querySelector('#logo-marca') 

tarjeta.addEventListener('click',(e)=>{
	tarjeta.classList.toggle('active')
})  

abrirBoton.addEventListener('click',(e)=>{
	abrirBoton.classList.toggle('active')
	formulario.classList.toggle('active')
}) 
 
function mostrarFrente() { 

	if(tarjeta.classList.contains('active')){ 
		tarjeta.classList.remove('active')

	}
	
} 

for(let i=1;i<=12;i++){  

	const opcion=document.createElement('option')
	opcion.value=i 
	opcion.innerHTML=i
	formulario.selectMes.appendChild(opcion)


} 

 const fullYear=new Date().getFullYear() 



for(let i=fullYear;i<=fullYear + 8 ;i++){  

	const opcion=document.createElement('option')
	opcion.value=i 
	opcion.innerHTML=i
	formulario.selectYear.appendChild(opcion) 
  

} 

 formulario.inputNumero.addEventListener('keyup',(e)=>{

	let valorInput=e.target.value 

	formulario.inputNumero.value=valorInput 

	.replace(/\s/g,'') 

	.replace(/\D/g,'') 
    .replace(/([0-9]{4})/g,'$1')


    .trim()
	numeroTarjeta.textContent=valorInput

 if(valorInput==''){

	numeroTarjeta.textContent='##############' 
    
	logoDeMarca.innerHTML=''
 }   
 
 if(valorInput[0]==4){  

	logoDeMarca.innerHTML='' 
	const imaGen=document.createElement('img')
	imaGen.src='imagenes/visa.png' 
	logoDeMarca.appendChild(imaGen)
	
 }   

 else if(valorInput[0]==5){  

	logoDeMarca.innerHTML='' 
	const imaGen=document.createElement('img')
	imaGen.src='imagenes/mastercard.png' 
	logoDeMarca.appendChild(imaGen)
	
 }    

 mostrarFrente()



 })
 

  formulario.inputNombre.addEventListener('keyup',(e)=>{ 

	let valorInput=e.target.value 

	formulario.inputNombre.value=valorInput.replace(/[0-9]/g,'') 
	 
	nombreTarjeta.textContent=valorInput
	firma.textContent=valorInput 

	if(valorInput==''){

		nombreTarjeta.textContent='Mercedes Alvarez'
	
	 }    

	  mostrarFrente() 
	 
  })


  formulario.selectMes.addEventListener('change',(e)=>{
	 expedicionMes.textContent=e.target.value 
	 
	 mostrarFrente() 
  })
  

  formulario.selectYear.addEventListener('change',(e)=>{
	expedicionAño.textContent=e.target.value.slice(2)
	
	mostrarFrente() 
 }) 

  formulario.inputCCV.addEventListener('keyup',()=>{
	 
	 if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active') 

		formulario.inputCCV.value=formulario.inputCCV.value 

		.replace(/\s/g,'') 

		.replace(/\D/g,'') 

		ccv.textContent=formulario.inputCCV.value


	 }
  })
 
  formulario.inputCCV.addEventListener('input', () => {
    const ccvValue = formulario.inputCCV.value;
    // Rellenar con asteriscos si es menor a 3 dígitos
    ccv.textContent = ccvValue.padEnd(3, '*');
    if (ccvValue.length === 3) {
        mostrarFrente();
    }
});

   
   
 
  const agradecimiento = document.querySelector('#agradecimiento');
const numeroReferencia = document.querySelector('#numeroReferencia');
const botonEnviar = document.getElementById('btn-enviar');

// Función para mostrar el mensaje de agradecimiento y restablecer la tarjeta
function mostrarAgradecimiento() {
    formulario.classList.remove('active');
    agradecimiento.style.display = 'block';
    tarjeta.classList.remove('active');
    ccv.textContent = '***'; // Restablecer los asteriscos en el CCV
}

// Validar el formulario antes de enviar
// Validar el formulario antes de enviar
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío del formulario por defecto

    const valorNumero = formulario.inputNumero.value;
    const valorNombre = formulario.inputNombre.value;
    const valorMes = formulario.selectMes.value;
    const valorAño = formulario.selectYear.value;
    const valorCCV = formulario.inputCCV.value;

    if (valorNumero && valorNombre && valorMes && valorAño && valorCCV.length === 3) {
        mostrarAgradecimiento();
    } else {
        alert('Por favor, complete todos los campos y asegúrese de ingresar los 3 dígitos del CCV.');
    }
});


tarjeta.addEventListener('click', () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
        ccv.textContent = '***'; // Restablecer los asteriscos en el CCV
    }
});

abrirBoton.addEventListener('click', () => {
    abrirBoton.classList.remove('active');
    formulario.classList.add('active');
    agradecimiento.style.display = 'none';
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
        ccv.textContent = '***'; // Restablecer los asteriscos en el CCV
    }
});

function mostrarFrente() {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
        ccv.textContent = '***'; // Restablecer los asteriscos en el CCV
    }
}