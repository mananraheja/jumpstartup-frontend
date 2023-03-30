import { Component } from '@angular/core';
// import { RESTAPIService} from '../restapiservice/.service';
import { RESTAPIService } from 'src/app/restapiservice.service';

import { Router } from "@angular/router";
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
email:string=localStorage.getItem('email')??""
type:string = localStorage.getItem('type')??""
uuid : string = localStorage.getItem('uuid')??""
username:string =localStorage.getItem('username')??""
phone :string=''
domain : string =''
institution:string=''
degree : string=''
major : string =''
year: string =''
work_experience=''
fullName=''
// if (this.type== 'investor') {
//   return this.service.getInvestorUuid(this.uuid).subscribe
// }
constructor (private service: RESTAPIService,private router: Router){

  if (this.type == 'Investor') {
    this.investor_profile();
  
  }
  
  else if( this.type=='Entrepreneur'){
    this.entrepreneur_profile();
  
     
     }
  
  else if (this.type=='Freelancer'){
    this.freelancer_profile();
    // this.service.getFreelancerUuid(this.uuid).subscribe((body:any)=>{
    //   console.log(body['uuid'])
    //  });
  }
  }
async freelancer_profile(){
  await firstValueFrom(this.service.getFreelancerUuid(this.uuid)).then((body: any)=>{
    console.log(body);
    // this.username= body['username']
    this.phone= body['phone_number']
    this.domain= body['domain']
    this.institution= body['institution']
    this.degree= body['degree']
    this.major =body['major']
    this.year =body['year_of_completion']
    this.work_experience= body['work_experience']
    this.fullName= body['firstName']+' '+body['lastName']
  })
}

async entrepreneur_profile(){
  await firstValueFrom(this.service.getEntrepreneurUuid(this.uuid)).then((body: any)=>{
    console.log(body);
    // this.username= body['username']
    // this.email= body['email']
    this.phone= body['phone_number']
    this.domain= body['domain']
    this.institution= body['institution']
    this.degree= body['degree']
    this.major =body['major']
    this.year =body['year_of_completion']
    this.work_experience= body['work_experience']
    this.fullName= body['firstName']+' '+body['lastName']

  })
}
async investor_profile(){
  await firstValueFrom(this.service.getInvestorUuid(this.uuid)).then((body: any)=>{
    console.log(body);
    // this.username= body['username']
    // this.email= body['email']
    this.phone= body['phone_number']
    this.domain= body['domain']
    this.institution= body['institution']
    this.degree= body['degree']
    this.major =body['major']
    this.year =body['year_of_completion']
    this.work_experience= body['work_experience']
    this.fullName= body['firstName']+' '+body['lastName']

  })
}



}
