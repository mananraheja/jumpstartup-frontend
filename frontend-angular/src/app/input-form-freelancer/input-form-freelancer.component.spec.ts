import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormFreelancerComponent } from './input-form-freelancer.component';

describe('InputFormFreelancerComponent', () => {
  let component: InputFormFreelancerComponent;
  let fixture: ComponentFixture<InputFormFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
