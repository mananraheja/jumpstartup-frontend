import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "f" when the user is freelancer',()=>{
    component.user='freelancer';
    expect(component.checkRole()).toBe('f');
 });

 it('should return "i" when the user is investor',()=>{
   component.user='investor';
   expect(component.checkRole()).toBe('i');
});

it('should return "e" when the user is entrepreneur',()=>{
 component.user='entrepreneur';
 expect(component.checkRole()).toBe('e');
});

it('should return "undefined" when the user is not of the three categories',()=>{
  component.user='';
  expect(component.checkRole()).toBe('undefined');
 });


});
