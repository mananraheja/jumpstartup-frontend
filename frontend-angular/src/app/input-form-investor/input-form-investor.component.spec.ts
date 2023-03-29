import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';

import { InputFormInvestorComponent } from './input-form-investor.component';

describe('InputFormInvestorComponent', () => {
  let component: InputFormInvestorComponent;
  let fixture: ComponentFixture<InputFormInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatStepperModule,MatFormFieldModule,MatButtonModule,MatInputModule,BrowserAnimationsModule,ReactiveFormsModule],
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
