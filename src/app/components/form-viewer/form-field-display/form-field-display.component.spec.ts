import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldDisplayComponent } from './form-field-display.component';

describe('FormFieldDisplayComponent', () => {
  let component: FormFieldDisplayComponent;
  let fixture: ComponentFixture<FormFieldDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
