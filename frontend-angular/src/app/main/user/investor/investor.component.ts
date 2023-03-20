import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent {
  constructor(){
    this.childVar='';
  }
  @Input() childVar: string;
}
