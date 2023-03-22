import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { UserComponent } from './user.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { InvestorComponent } from './investor/investor.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent, FreelancerComponent,InvestorComponent,EntrepreneurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
