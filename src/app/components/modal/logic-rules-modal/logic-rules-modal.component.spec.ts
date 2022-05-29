import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicRulesModalComponent } from './logic-rules-modal.component';

describe('LogicRulesModalComponent', () => {
  let component: LogicRulesModalComponent;
  let fixture: ComponentFixture<LogicRulesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicRulesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicRulesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
