import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ReactiveFormsModule} from '@angular/forms';


describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
