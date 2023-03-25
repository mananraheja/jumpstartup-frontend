import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule,ReactiveFormsModule} from '@angular/forms';



describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginComponent ],
      imports:[RouterTestingModule,FormsModule,HttpClientTestingModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should return the "user" userLoginGet FormControl',()=>{
    expect(component.userLoginGet()).toEqual(component.loginForm.get('user'));
  });

  it('should return the "user" signUpUser FormControl',()=>{
    expect(component.signupUser()).toEqual(component.signUpForm.get('user'));
  });

  it('should return the "user" emailSignUp FormControl',()=>{
    expect(component.emailSignUp()).toEqual(component.signUpForm.get('email'));
  });
  
  it('should return the "user" signuppass FormControl',()=>{
    expect(component.signuppass()).toEqual(component.signUpForm.get('pswd'));
  });

  it('should return the "user" loginpass FormControl',()=>{
    expect(component.loginpass()).toEqual(component.loginForm.get('pswd'));
  });

  //SignUp

  it('"validationSignup" should return true if all fields are valid', () => {
    component.signUpForm.controls.user.setValue('john')
    component.signUpForm.controls.email.setValue('john@example.com')
    component.signUpForm.controls.pswd.setValue('john@123')
    component.signUpForm.controls.type.setValue('investor')

    const result = component.validationSignup();

    expect(result).toBe(true);
    expect(component.errorMsg).toBe('');
  });
  it('ValidationSignup should return false and display error message if username is missing', () => {
    component.signUpForm.controls.user.setValue('')
    component.signUpForm.controls.email.setValue('john@example.com')
    component.signUpForm.controls.pswd.setValue('john@123')
    component.signUpForm.controls.type.setValue('investor')
    const result = component.validationSignup();
    expect(result).toBe(false);
    expect(component.errorMsg).toBe('*Username required');
  });
  it('ValidationSignup should return false and display error message if email is missing', () => {
    component.signUpForm.controls.user.setValue('john')
    component.signUpForm.controls.email.setValue('')
    component.signUpForm.controls.pswd.setValue('john@123')
    component.signUpForm.controls.type.setValue('investor')

    const result = component.validationSignup();
    expect(result).toBe(false);
    expect(component.errorMsg).toBe('*E-mail address required');
  });

  it('ValidationSignup should return false and display error message if password is missing', () => {
    component.signUpForm.controls.user.setValue('john')
    component.signUpForm.controls.email.setValue('john@example.com')
    component.signUpForm.controls.pswd.setValue('')
    component.signUpForm.controls.type.setValue('investor')

    const result = component.validationSignup();
    expect(result).toBe(false);
    expect(component.errorMsg).toBe('*Password required');
  });

  it('ValidationSignup should return false and display error message if password is missing', () => {
    component.signUpForm.controls.user.setValue('*01')
    component.signUpForm.controls.email.setValue('john@example.com')
    component.signUpForm.controls.pswd.setValue('john@123')
    component.signUpForm.controls.type.setValue('investor')

    const result = component.validationSignup();
    expect(result).toBe(false);
    expect(component.errorMsg).toBe('*Invalid username');
  });

   

  it('ValidationSignup should return false and display error message if email address is invalid', () => {
    component.signUpForm.controls.user.setValue('john')
    component.signUpForm.controls.email.setValue('john')
    component.signUpForm.controls.pswd.setValue('john@123')
    component.signUpForm.controls.type.setValue('investor')

    const result = component.validationSignup();
    expect(result).toBe(false);
    expect(component.errorMsg).toBe('*Invalid email address');
  });
  
  it('ValidationSignup should return false and display error message if password characters do not match', () => {
    component.signUpForm.controls.user.setValue('john')
    component.signUpForm.controls.email.setValue('john@example.com')
    component.signUpForm.controls.pswd.setValue('joh')
    component.signUpForm.controls.type.setValue('investor')

    const result = component.validationSignup();
    expect(result).toBe(false);
    expect(component.errorMsg).toBe('*Password must contain atleast 5 characters');
  });
 
//Login 

it('"validationLogin" should return true if all fields are valid', () => {
  component.loginForm.controls.user.setValue('john')
  component.loginForm.controls.pswd.setValue('john@123')

  const result = component.validationLogin();

  expect(result).toBe(true);
  expect(component.errorMsg).toBe('');
});


it('"validationLogin" should return false if username is missing', () => {
  component.loginForm.controls.user.setValue('')
  component.loginForm.controls.pswd.setValue('john@123')

  const result = component.validationLogin();

  expect(result).toBe(false);
  expect(component.errorMsg).toBe('*Username required');
});

it('"validationLogin" should return false if password is missing', () => {
  component.loginForm.controls.user.setValue('john')
  component.loginForm.controls.pswd.setValue('')

  const result = component.validationLogin();

  expect(result).toBe(false);
  expect(component.errorMsg).toBe('*Password required');
});

it('"validationLogin" should return false if password characters do not match', () => {
  component.loginForm.controls.user.setValue('john')
  component.loginForm.controls.pswd.setValue('joh')

  const result = component.validationLogin();

  expect(result).toBe(false);
  expect(component.errorMsg).toBe('*Password must contain atleast 5 characters');
});




});
