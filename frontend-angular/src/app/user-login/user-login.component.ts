import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {
  a = false ;
  constructor(
    private route: ActivatedRoute,
  ) {
    this.myfunction();

   }

  myfunction(){
    this.route.fragment.subscribe((fragment) => {
       if(fragment!=null){
         this.a= true
       }
    })
  }
  
  signUpForm = new FormGroup({

    user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pswd: new FormControl('', [Validators.required, Validators.minLength(5)])

  })
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pswd: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  errorMsg: string = "";

  get validationSignup() {
    if (this.invalidUserSignup) {
      return false;
    }
    else {
      this.errorMsg = "";
      this.userSignUp();
      return true;
    }
  }

  get validationLogin() {
    if (this.invalidUserlogin) {
      return false;
    }
    else {
      this.errorMsg = "";
      this.userLogin();
      return true;
    };
  }
  get invalidUserSignup() {

    if (this.signupUser && this.signupUser.hasError('required')) {
      this.errorMsg = "*Username required";
      return true;
    }
    else if (this.signupUser && this.signupUser.invalid) {
      this.errorMsg = "*Invalid username";
      return true;
    }

    else if (this.emailSignUp && this.emailSignUp.hasError('required')) {
      this.errorMsg = "*E-mail address required";
      return true;
    }

    else if (this.emailSignUp && this.emailSignUp.invalid) {
      this.errorMsg = "Invalid email address";
      return true;
    }
    else if (this.signuppass && this.signuppass.hasError('required')) {
      this.errorMsg = "*Password required";
      return true;
    }
    else if (this.signuppass && this.signuppass.invalid) {
      this.errorMsg = "*Password must contain atleast 5 characters";
      return true;
    }
    else return false;
  }

  get signupUser() {
    return this.signUpForm.get('user')
  }

  get emailSignUp() {
    return this.signUpForm.get('email')
  }

  get signuppass() {
    return this.signUpForm.get('pswd')
  }

  userSignUp() {
    console.log(this.signUpForm.value)
  }

  get invalidUserlogin() {
    if (this.emailLogin && this.emailLogin.hasError('required')) {
      this.errorMsg = "*E-mail required"
      // console.log("invalid email address");
      return true;
    }

    else if (this.emailLogin && this.emailLogin.invalid) {
      this.errorMsg = "*Invalid e-mail address";
      return true;
    }

    else if (this.loginpass && this.loginpass.hasError('required')) {
      this.errorMsg = "*Password required";
      // console.log("Invalid password");
      return true;
    }
    else if (this.loginpass && this.loginpass.invalid) {
      this.errorMsg = "*Password must contain atleast 5 characters";
      return true;
    }

    else return false;
  }

  get emailLogin() {
    return this.loginForm.get('email');
  }

  get loginpass() {
    return this.loginForm.get('pswd');
  }

  userLogin() {
    console.log(this.loginForm.value)
  }


  get varCheck(): boolean {
    if (this.errorMsg != "")
      return true;
    else
      return false;
  }

  
} 



