import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent {
  constructor(){
    this.childVar='';
  }
  @Input() childVar: string;

}
