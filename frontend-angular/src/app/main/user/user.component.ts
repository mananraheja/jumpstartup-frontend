import { Component} from '@angular/core';
import { MainComponent } from '../main.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user :string= localStorage.getItem('type')??""

  checkRole(): string{
    // console.log(this.user);
   // var user="entrepreneur";
   if (this.user=="Freelancer")
     return "f";
   else if( this.user=="Investor")
     return "i";
   else if( this.user=="Entrepreneur")
     return "e"
   else 
     return "undefined";
  }

}
