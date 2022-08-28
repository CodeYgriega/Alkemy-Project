import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horasYminutosPipe'
})
export class HorasYminutosPipePipe implements PipeTransform {

  transform(numero: number){
    //si el número es igual a 60, será 1 hora
    if(numero === 60){
      return "1 hora";
    }//si es menor de 60, se mostrará el número y "minutos"
    else if(numero < 60){
      return `${numero} minutos`;
    }//y sino, empezaremos a hacer cuentas para saber a cuantas horas y minutos corresponde el número recibido
    else{
      //variable para tener una referencia del valor de una hora
      let unaHora: number = 60;
      //variables que contarán cuantas horas y minutos tiene el número en total
      let horasDelNumero: number = 0;
      let minutosDelNumero: number = 0;
      //un ciclo que se repetirá varias veces (como el menú sólo acepta 4 platos no influirá)
      for(let i=0; i<=100; i++){
        numero = numero - unaHora; //en cada vuelta, el valor del número será: el número - una hora
        horasDelNumero++; //entonces las horas del número irán aumentando +1
        if(numero < 0){ //si el número es menor que 0, haremos la cuenta de los minutos
          numero = numero + unaHora; //el número tendrá el valor de: el número (en ese momento osea menor que 0) + una hora
          horasDelNumero = horasDelNumero - 1; //le restaremos a la variable horasDelNumero, la hora que sumamos anteriormente
          minutosDelNumero = numero; //los minutos del número tendrán el valor actual del número y se detendrá el bucle
          break
        }
      }//condicionales para cada caso, sólo alteraremos el string final
      if(
        horasDelNumero > 1 && minutosDelNumero > 1
      ){
        return `${horasDelNumero} horas y ${minutosDelNumero} minutos`;
      }
      else if(
        horasDelNumero <= 1 && minutosDelNumero > 1
      ){
        return `${horasDelNumero} hora y ${minutosDelNumero} minutos`;
      }
      else if(
        horasDelNumero > 1 && minutosDelNumero < 1
      ){
        return `${horasDelNumero} horas`;
      }
      else if(
        horasDelNumero <= 1 && minutosDelNumero < 1
      ){
        return `${horasDelNumero} hora`;
      }
      else{
        return "error";
      }
    }
  }

}
