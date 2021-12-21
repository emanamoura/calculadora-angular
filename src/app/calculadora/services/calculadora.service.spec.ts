import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1,4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }) 
  )

  it('deve garantir que 1 - 5 = -4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1,5, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-4);
    })
  )

  it('deve garantir que 5 * 20 = 100',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(5,20, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(100);
    })
  )
  
  it('deve garantir que 100 / 2 = 50',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(100, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(50);
    })
  )

  
  it('deve garantir que 5000 / 0 = NaN',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(5000, 0, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(NaN);
    })
  )

  it('deve retornar - para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let invalida = service.calcular(1, 4, '%');
      expect(invalida).toEqual(0);
    })
  )
});
