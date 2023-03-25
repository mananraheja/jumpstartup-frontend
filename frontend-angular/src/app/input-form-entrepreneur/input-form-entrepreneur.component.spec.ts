import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormEntrepreneurComponent } from './input-form-entrepreneur.component';

describe('InputFormEntrepreneurComponent', () => {
  let component: InputFormEntrepreneurComponent;
  let fixture: ComponentFixture<InputFormEntrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
