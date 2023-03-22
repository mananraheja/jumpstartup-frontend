import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main.component';
import { FreelancerComponent } from './user/freelancer/freelancer.component';
import { InvestorComponent } from './user/investor/investor.component';
import { EntrepreneurComponent } from './user/entrepreneur/entrepreneur.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent,NavbarComponent,UserComponent ,FreelancerComponent,EntrepreneurComponent,InvestorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
