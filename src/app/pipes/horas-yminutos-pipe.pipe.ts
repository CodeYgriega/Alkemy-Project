import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horasYminutosPipe'
})
export class HorasYminutosPipePipe implements PipeTransform {

  transform(numero: number){
    if(numero === 60){
      return "1 hora";
    }
    else if(numero < 60){
      return `${numero} minutos`;
    }
    else{
      let unaHora: number = 60;
      let unMinuto: number = 1;

      let horasDelNumero: number = 0;
      let minutosDelNumero: number = 0;

      for(let i=0; i<=100; i++){
        numero = numero - unaHora;
        horasDelNumero++;
        if(numero < 0){
          numero = numero + unaHora;
          horasDelNumero = horasDelNumero - 1;
          minutosDelNumero = numero;
          break
        }
      }
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
