import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-form-freelancer',
  templateUrl: './input-form-freelancer.component.html',
  styleUrls: ['./input-form-freelancer.component.css']
})
export class InputFormFreelancerComponent {

  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
    phoneNumber:['',Validators.required],
    linkedinLink:['',Validators.required],
    skills:['',Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    institutionName: ['', Validators.required],
    degree:['',Validators.required],
    major:['',Validators.required],
    yearOfCompletion:['',Validators.required],
    workExperience:['',Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {
  }

  onSubmit(){
    if(!this.firstFormGroup.dirty && this.firstFormGroup.touched){
      console.log(this.firstFormGroup.controls.firstName.value)
    }
    if(!this.secondFormGroup.dirty && this.secondFormGroup.touched){
      console.log(this.secondFormGroup.controls.institutionName.value)
    }
  }
}
