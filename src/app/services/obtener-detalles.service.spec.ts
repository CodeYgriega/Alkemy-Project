import { TestBed } from '@angular/core/testing';

import { ObtenerDetallesService } from './obtener-detalles.service';

describe('ObtenerDetallesService', () => {
  let service: ObtenerDetallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerDetallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
