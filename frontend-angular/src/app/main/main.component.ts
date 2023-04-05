import { Component } from '@angular/core';

import {  Router} from '@angular/router';
import { EntrepreneurComponent } from './user/entrepreneur/entrepreneur.component';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[EntrepreneurComponent]
})
export class MainComponent {
 
currentRoute: string= ''; 

constructor(public router: Router, private entrepreneur: EntrepreneurComponent){
  console.log('harshu')
}
   

}