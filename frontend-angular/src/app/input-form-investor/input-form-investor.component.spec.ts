import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormInvestorComponent } from './input-form-investor.component';

describe('InputFormInvestorComponent', () => {
  let component: InputFormInvestorComponent;
  let fixture: ComponentFixture<InputFormInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFormInvestorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputFormInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
