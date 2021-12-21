/**
 * Serviço responsável por executar as operações da calculadora.
 * 
 * @author Emanuel Araújo de Moura<emanuel.moura@ccc.ufcg.edu.br>
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /**
   * Define as constantes utilizadas para identificar as operações de cálculo
   */
  static readonly SOMA:  string = '+';
  static readonly SUBTRACAO:  string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  /**
   * Método que calcula um operação matemática de acordo com o operador definido e dado dois números.
   * Suporta soma, divisão, multiplicação e subtração.
   * 
   * @param num1 number Primeiro número recebido.
   * @param num2 number Segundo número recebido.
   * @param operacao string Sinal do operador a ser calculado
   * @return number Retorna um resultado de acordo com os números e operacao dados.
   */
  calcular(num1:number, num2:number, operacao:string): number {
    let resultado: number; //Armazena o resultado da operação da calculadora.

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        if(num2 == 0) {
          resultado = NaN;
          break;
        } 
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }  
}
