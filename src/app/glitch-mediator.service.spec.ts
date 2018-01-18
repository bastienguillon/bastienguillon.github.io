import { TestBed, inject } from '@angular/core/testing';

import { GlitchMediatorService } from './glitch-mediator.service';

describe('GlitchMediatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlitchMediatorService]
    });
  });

  it('should be created', inject([GlitchMediatorService], (service: GlitchMediatorService) => {
    expect(service).toBeTruthy();
  }));
});
