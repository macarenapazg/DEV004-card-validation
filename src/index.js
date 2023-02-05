import validator from './validator';

console.log(validator);

function validate() {
  const cardNumber = document.getElementById("cardnumber");

  if (validator.isValid(cardNumber.value)){
    cardNumber.value = validator.maskify(cardNumber.value);
    alert("Tarjeta Válida, puedes comprar");
  } else {
    alert("Tarjeta Inválida, Intenta de nuevo")
  }
    
}

let miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", validate);
