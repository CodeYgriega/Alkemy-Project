import { TestBed } from '@angular/core/testing';

import { BuscarRecetaService } from './buscar-receta.service';

describe('BuscarRecetaService', () => {
  let service: BuscarRecetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarRecetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
