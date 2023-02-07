import validator from './validator.js';

console.log(validator);

function validate() {
  const cardNumber = document.getElementById("cardnumber");
  console.log("probando")
 
  const maski = validator.maskify(cardNumber.value);

  if (validator.isValid(cardNumber.value)){
    
    
    alert("Tarjeta Válida, puedes comprar");


  } else {
    // eslint-disable-next-line no-unused-vars
    alert( `Tarjeta Inválida N° ${maski}, Intenta de nuevo`);
  }
    
}

const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", validate);
