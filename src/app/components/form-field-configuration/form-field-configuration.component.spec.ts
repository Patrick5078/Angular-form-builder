import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldConfigurationComponent } from './form-field-configuration.component';

describe('FormFieldConfigurationComponent', () => {
  let component: FormFieldConfigurationComponent;
  let fixture: ComponentFixture<FormFieldConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
