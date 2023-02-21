import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   user:string ="freelancer";

  constructor(private router: Router) {
    this.roleCheck();
  }
   
  roleCheck()
  {
    if(this.user=="freelancer")
     {
      this.router.navigate(['/user/freelancer/']);
    }
    else if(this.user=="investor")
    this.router.navigate(['user/investor']);
    else if(this.user=="entrepreneur")
     this.router.navigate(['user/entrpreneur']);
  }
   
  
}
