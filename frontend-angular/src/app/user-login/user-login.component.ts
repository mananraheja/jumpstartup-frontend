import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RESTAPIService} from '../restapiservice.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent {
  a = false ;
  constructor(
    private route: ActivatedRoute,
    private service: RESTAPIService,
    private router: Router
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
    pswd: new FormControl('', [Validators.required, Validators.minLength(5)]),
    type: new FormControl()
  })
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
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
    console.log(this.signUpForm.value.type);
    const obj: { username: string, email: string, hashpass: string, type: string } = {
      username: this.signUpForm.value.user??"",
      email: this.signUpForm.value.email??"",
      hashpass: this.signUpForm.value.pswd??"",
      type: this.signUpForm.value.type??""

    };
    const body: string = JSON.stringify(obj);
    this.service.postCreateUser(body).subscribe({
      complete: () => { 
        console.log(this.signUpForm.value)
        this.router.navigate(['home']) 
      },
      error: (err) => { console.error(err) 
      }
    });
  }

  get invalidUserlogin() {
    if (this.userLoginGet && this.userLoginGet.hasError('required')) {
      this.errorMsg = "*Username required"
      // console.log("invalid email address");
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

  get userLoginGet() {
    return this.loginForm.get('user');
  }

  get loginpass() {
    return this.loginForm.get('pswd');
  }

  userLogin() {
    const obj: { username: string, hashpass: string } = {
      username: this.loginForm.value.user??"",
      hashpass: this.loginForm.value.pswd??""
    };
    const body: string = JSON.stringify(obj);
    this.service.postLoginUser(body).subscribe({
      complete: () => { 
        console.log(this.loginForm.value);
        this.router.navigate(['home']) 
      },
      error: (err) => { console.error(err) 
      }
    });
  }


  get varCheck(): boolean {
    if (this.errorMsg != "")
      return true;
    else
      return false;
  }

  
} 



