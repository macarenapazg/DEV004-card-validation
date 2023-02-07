import validator from './validator.js';

console.log(validator);

function validate() {
  const cardNumber = document.getElementById("cardnumber");
  console.log("probando")
 


  if (validator.isValid(cardNumber.value)){
    cardNumber.value = validator.maskify(cardNumber.value);
    
    alert("Tarjeta Válida, puedes comprar");


  } else {
    // eslint-disable-next-line no-unused-vars
    alert( `Tarjeta Inválida N° ${validator}, Intenta de nuevo`);
  }
    
}

const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", validate);
