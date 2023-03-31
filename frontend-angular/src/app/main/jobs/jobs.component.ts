import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  constructor(){
    this.childVar='';
  }
  @Input() childVar: string;
  
  }


