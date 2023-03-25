import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-form-entrepreneur',
  templateUrl: './input-form-entrepreneur.component.html',
  styleUrls: ['./input-form-entrepreneur.component.css']
})
export class InputFormEntrepreneurComponent {
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
    phoneNumber:['',Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    domain: ['', Validators.required],
    companyName: ['', Validators.required],
    stakeHolder: ['', Validators.required],
    companySize: ['', Validators.required],
    fundingStatus: ['', Validators.required],
    assets: ['', Validators.required],
    profit: ['', Validators.required],
    pitch: ['', Validators.required],
  });
  thridFormGroup = this._formBuilder.group({
    
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {
  }

  onSubmit(){
    if(!this.firstFormGroup.dirty && this.firstFormGroup.touched){
      console.log(this.firstFormGroup.controls.firstName.value)
    }
  }
}
