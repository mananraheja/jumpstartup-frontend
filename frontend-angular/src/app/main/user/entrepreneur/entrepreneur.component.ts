import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.css']
})
export class EntrepreneurComponent {

constructor(){
  this.childVar='';
}
@Input() childVar: string;

}
