import { Component, Input } from '@angular/core';
import { RESTAPIService } from 'src/app/restapiservice.service';
import {firstValueFrom} from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent {

  job_obj=[{ 
        "jobUuid": "",
        "entrepreneurUuid": "",
        "description": "",
        "isActive": "",
        "numberOfOpenings": "",
        "skills": "",
        "payEstimate": "",
        "type": "",
        "postingDate": ""

  }]
  constructor(private service: RESTAPIService,private router: Router ){
    this.displayJobs()
    this.childVar='';
  }
  @Input() childVar: string;
  i:number=0
  async displayJobs(){
    console.log("Hey thereee!")
    await firstValueFrom(this.service.getAllJobs()).then((body:any)=>{
      let len = body.length
      while(this.i<len){
      this.job_obj=body;
      console.log(this.job_obj);
      this.i++;
      }
      // console.log(this.investor_obj[1])
  
    })
  }
 
  viewJobDetails(jobUuid:string){
    console.log("i AM JOBBBBBB",jobUuid)
      console.log('inside view Investors')
      this.router.navigate(
       ['/jobs'],
       {queryParams:{jobid:jobUuid}})
    }
  }
 

