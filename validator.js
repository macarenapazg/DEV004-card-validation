const validator = {

  isValid: function (cardnumber){
    const validar = cardnumber.split("");
    const lunhNum = validar.reverse();

    let suma = 0;
    let sumaPares =0;
    let sumaImpares = 0;
    let totalSuma =0;

    //Suma de pares:

    for ( let i = 0; i <lunhNum.length; i++){
      if (i % 2 === 1 ){
        sumaImpares = lunhNum[i]* 2;

        if(sumaImpares >9){
          suma = sumaImpares.toString().split("");
          lunhNum[i]= parseInt(suma[0])+ parseInt(suma[1])
        }
        else { 
          lunhNum[i] = sumaImpares;
        }

        totalSuma = parseInt( totalSuma) + parseInt (lunhNum[i]);
      }
      else if (i % 2 === 0 ){
        sumaPares = parseInt(sumaPares)+ parseInt(lunhNum[i]);
      }


    }
    //suma de pares e impares

    totalSuma += sumaPares;

    if(totalSuma %10 === 0 ){
      return true;
    }else{
      return false;
    }
  },


  //Para ocultar los 12 primeros digitos de la tarjeta de credito

  maskify: function (cardnumber){
    
    const ultimosCuatro = cardnumber.slice(cardnumber.length-4,cardnumber.length)
    let resultado = "";

    for ( let i=0; i<cardnumber.length -4 ; i++){
      if (i<cardnumber.length -4 ){
        resultado = resultado + "#"
      } else {
        resultado = resultado + cardnumber[i]
      }

    }
    return resultado + ultimosCuatro

  }




};


export default validator;
