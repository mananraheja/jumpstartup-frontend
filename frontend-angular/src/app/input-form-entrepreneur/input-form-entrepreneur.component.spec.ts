import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';

import { InputFormEntrepreneurComponent } from './input-form-entrepreneur.component';

describe('InputFormEntrepreneurComponent', () => {
  let component: InputFormEntrepreneurComponent;
  let fixture: ComponentFixture<InputFormEntrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatStepperModule,MatFormFieldModule,MatButtonModule,MatInputModule,BrowserAnimationsModule,ReactiveFormsModule],
      declarations: [ InputFormEntrepreneurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
