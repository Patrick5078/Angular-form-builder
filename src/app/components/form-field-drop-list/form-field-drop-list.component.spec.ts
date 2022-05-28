import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldDropListComponent } from './form-field-drop-list.component';

describe('FormFieldDropListComponent', () => {
  let component: FormFieldDropListComponent;
  let fixture: ComponentFixture<FormFieldDropListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldDropListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
