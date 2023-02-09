import validator from './validator.js';



function validate() {
  const cardNumber = document.getElementById("cardnumber");//
 
  const maski = validator.maskify(cardNumber.value);

  if (validator.isValid(cardNumber.value)){
    
    
    alert(`Tarjeta N° ${maski}  Válida, puedes pagar la inscripcion a tu curso`);


  } else {
 
    alert( `Tarjeta Inválida N° ${maski}, Intenta de nuevo`);
  }
    
}
//miBoton llama a las 
const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", validate);
