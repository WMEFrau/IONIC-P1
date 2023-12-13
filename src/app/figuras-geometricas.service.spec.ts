import { TestBed } from '@angular/core/testing';

import { FigurasGeometricasService } from './figuras-geometricas.service';

describe('FigurasGeometricasService', () => {
  let service: FigurasGeometricasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FigurasGeometricasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
