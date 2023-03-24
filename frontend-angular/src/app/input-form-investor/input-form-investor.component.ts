import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-form-investor',
  templateUrl: './input-form-investor.component.html',
  styleUrls: ['./input-form-investor.component.css']
})
export class InputFormInvestorComponent {
  
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
    phoneNumber:['',Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    domain: ['', Validators.required],
    fundingAvailable: ['', Validators.required],
    brandBuild: ['', Validators.required],
  });
  thridFormGroup = this._formBuilder.group({
    companyName: ['', Validators.required],
    stakeHolder: ['', Validators.required],
    companySize: ['', Validators.required],
    fundingStatus: ['', Validators.required],
    assets: ['', Validators.required],
    profit: ['', Validators.required],
    pitch: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {
  }

  onSubmit(){
    if(!this.firstFormGroup.dirty && this.firstFormGroup.touched){
      console.log(this.firstFormGroup.controls.firstName.value)
    }
    if(!this.secondFormGroup.dirty && this.secondFormGroup.touched){
      console.log(this.secondFormGroup.controls.brandBuild.value)
    }
    if(!this.thridFormGroup.dirty && this.thridFormGroup.touched){
      console.log(this.thridFormGroup.controls.companyName.value)
    }
    
  }

  
  

}
