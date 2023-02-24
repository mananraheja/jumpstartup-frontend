import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

   user:string= "investor";
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

}
