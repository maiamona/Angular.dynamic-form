import { TestBed } from '@angular/core/testing';

import { FormfieldControlService } from './formfield-control.service';

describe('FormfieldControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormfieldControlService = TestBed.get(FormfieldControlService);
    expect(service).toBeTruthy();
  });
});
