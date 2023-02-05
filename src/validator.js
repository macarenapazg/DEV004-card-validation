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
      if (i % 2 === 0 ){
        sumaPares = lunhNum[i]* 2;

        if(sumaPares[i]>9){
          suma = sumaPares.toString().split("");
          lunhNum[i]= parseInt(suma[0]+ parseInt(suma[1]))
        }
        else { 
          lunhNum[i] = sumaPares;
        }

        totalSuma = parseInt( totalSuma) + parseInt (lunhNum[i]);
      }
      else if (i % 2 === 1 ){
        sumaImpares = parseInt(sumaImpares)+ parseInt(lunhNum[i]);
      }


    }
    //suma de pares e impares

    totalSuma += sumaImpares;

    if(totalSuma %10 === 0 ){
      return true;
    }else{
      return false;
    }
  },

  maskify: function (cardnumber){
    let maskNum = cardnumber.length;
    let mask = "";

    for (let i=0; i < (maskNum - 4); i++){
      mask += "#";
    }
    let maskPosic = mask + cardnumber.substring(maskNum-4,maskNum);
    return maskPosic
    
    console.log(maskPosic);

  }




};


export default validator;
