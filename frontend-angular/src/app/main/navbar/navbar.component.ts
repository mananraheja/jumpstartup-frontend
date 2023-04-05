import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  constructor(private router: Router){

  }
  // user:string= "entrepreneur";
  user :string= localStorage.getItem('type')??""
  user_name = localStorage.getItem('username')??""

  checkRole(): string{
   // var user="entrepreneur";
   if (this.user=="freelancer")
     return "f";
   else if( this.user=="investor")
     return "i";
   else if( this.user=="entrepreneur")
     return "e"
   else 
     return "undefined";
  }

  go_to_profile_page(){
    console.log("shreya here")
    this.router.navigate(['profile'])
  }

}
