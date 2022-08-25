import { TestBed } from '@angular/core/testing';

import { AddPlatoMenuService } from './add-plato-menu.service';

describe('AddPlatoMenuService', () => {
  let service: AddPlatoMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPlatoMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
