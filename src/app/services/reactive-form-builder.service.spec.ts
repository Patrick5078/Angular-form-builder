import { TestBed } from '@angular/core/testing';

import { ReactiveFormBuilderService } from './reactive-form-builder.service';

describe('ReactiveFormBuilderService', () => {
  let service: ReactiveFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
