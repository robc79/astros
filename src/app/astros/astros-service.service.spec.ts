import { TestBed } from '@angular/core/testing';

import { AstrosServiceService } from './astros-service.service';

describe('AstrosServiceService', () => {
  let service: AstrosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstrosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
