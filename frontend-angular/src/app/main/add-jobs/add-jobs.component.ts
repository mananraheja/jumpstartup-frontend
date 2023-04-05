import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { RESTAPIService } from 'src/app/restapiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent {
  firstFormGroup = this._formBuilder.group({
    job_description: ['', Validators.required],
    job_type:['',Validators.required],
    is_active:['',Validators.required],
    numberOfOpenings:['',Validators.required],
    skills:['',Validators.required],
    pay_estimate:['',Validators.required],
    date:['',Validators.required],


  });
  isLinear = false;

  
  constructor(private _formBuilder: FormBuilder, private router: Router, private service : RESTAPIService) {
  }
  
  onSubmit(){

  const obj:{entrepreneurUUID:string, description:string, isActive:string, numberOfOpenings:string, skills:string, payEstimate:string, jobType:string, postingDate:string}={
    entrepreneurUUID: localStorage.getItem('uuid')??"",
    description: this.firstFormGroup.value.job_description??"",
    isActive: this.firstFormGroup.value.is_active??"",
    numberOfOpenings: this.firstFormGroup.value.numberOfOpenings??"",
    skills: this.firstFormGroup.value.skills??"",
    payEstimate: this.firstFormGroup.value.pay_estimate??"",
    jobType: this.firstFormGroup.value.job_type??"",
    postingDate: this.firstFormGroup.value.date??""
  };
  const body: string = JSON.stringify(obj);
  console.log("I AM BODY",body)

  this.service.postJobs(body).subscribe({
    complete: () => { 
      console.log('Job posted!')
      this.router.navigate(['home']) 
    },
    error: (err) => { 
      console.error(err) 
    }
  });


  }

}
