import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { RESTAPIService } from '../restapiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input-form-entrepreneur',
  templateUrl: './input-form-entrepreneur.component.html',
  styleUrls: ['./input-form-entrepreneur.component.css']
})
export class InputFormEntrepreneurComponent {
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName:['',Validators.required],
    phoneNumber:['',Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    institutionName: ['', Validators.required],
    degree:['',Validators.required],
    major:['',Validators.required],
    yearOfCompletion:['',Validators.required],
    workExperience:['',Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
   
    domain: ['', Validators.required],
    companyName: ['', Validators.required],
    is_registered:['',Validators.required],
    stakeHolder: ['', Validators.required],
    companySize: ['', Validators.required],
    fundingStatus: ['', Validators.required],
    equity_offered: ['', Validators.required],
    assets: ['', Validators.required],
    open_to_negotiations: ['',Validators.required],
    profit: ['', Validators.required],
    pitch: ['', Validators.required],

    
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private service: RESTAPIService, private router: Router) {
  }

  onSubmit(){
    const putCall: {uuid:string, firstName: string, lastName: string}={
      uuid: localStorage.getItem('uuid')??"",
      firstName: this.firstFormGroup.value.firstName??"",
      lastName: this.firstFormGroup.value.lastName??""
    }

    const obj: { uuid: string, phone_number:string, domain:string, institution: string, degree:string, major:string, year_of_completion:string, work_experience: string, company_name:string,is_registered: string, stakeHolder: string,companySize:string,fundingStatus:string, equity_offered:string, assets:string , open_to_negotiations: string,profit:string, pitch: string}={
      uuid: localStorage.getItem('uuid')??"",
      phone_number: this.firstFormGroup.value.phoneNumber??"",
      domain: this.thirdFormGroup.value.domain??"",
      institution:this.secondFormGroup.value.institutionName??"",
      degree:this.secondFormGroup.value.degree??"",
      major:this.secondFormGroup.value.major??"",
      year_of_completion: this.secondFormGroup.value.yearOfCompletion??"",
      work_experience: this.secondFormGroup.value.workExperience??"",
      company_name: this.thirdFormGroup.value.companyName??"",
      is_registered: this.thirdFormGroup.value.is_registered??"",
      stakeHolder: this.thirdFormGroup.value.companyName??"",
      companySize: this.thirdFormGroup.value.companySize??"",
      fundingStatus: this.thirdFormGroup.value.fundingStatus??"",
      equity_offered: this.thirdFormGroup.value.equity_offered??"",
      assets: this.thirdFormGroup.value.assets??"",
      open_to_negotiations: this.thirdFormGroup.value.open_to_negotiations??"",
      profit:this.thirdFormGroup.value.profit??"",
      pitch: this.thirdFormGroup.value.pitch??""


    }

    const body: string = JSON.stringify(obj);
    this.service.putUpdateUserDetails(putCall).subscribe({
      complete: () => { 
        console.log('put call completed');
      },
      error: (err) => { 
        console.error(err) 
      }
    })
    this.service.postAddEntrepreneurDetails(body).subscribe({
      complete: () => { 
        this.router.navigate(['home']) 
      },
      error: (err) => { 
        console.error(err) 
      }
    });
  }
}
