import { TestBed } from '@angular/core/testing';

import { PwaService } from './pwa.service';

describe('PwaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PwaService = TestBed.inject(PwaService);
    expect(service).toBeTruthy();
  });
});
