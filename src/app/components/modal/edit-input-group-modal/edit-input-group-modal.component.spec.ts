import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInputGroupModalComponent } from './edit-input-group-modal.component';

describe('EditInputGroupModalComponent', () => {
  let component: EditInputGroupModalComponent;
  let fixture: ComponentFixture<EditInputGroupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInputGroupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInputGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
