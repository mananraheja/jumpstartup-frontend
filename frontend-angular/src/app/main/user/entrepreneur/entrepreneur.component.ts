import { Component, Input } from '@angular/core';
import { RESTAPIService } from 'src/app/restapiservice.service';
import {firstValueFrom} from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.css']
})
export class EntrepreneurComponent {

investor_obj=[
       { "uuid": "", 
        "firstName": "",
        "lastName": "",
        "phone_number": "0",
        "domain": "",
        "linkedin_link": "",
        "funding_available": "",
        "brands_built": "",
        "institution": "",
        "degree": "",
        "major": "",
        "year_of_completion": "",
        "work_experience": ""
}
]

freelancer_obj=[{
        "uuid": "",
        "firstName": "",
        "lastName": "",
        "phone_number": "",
        "skills": "",
        "linkedin_link": "",
        "institution": "",
        "degree": "",
        "major": "",
        "year_of_completion": "",
        "work_experience": ""
}]


flag:boolean=true

constructor(private service: RESTAPIService, private router: Router){
  console.log("I am inside entrepreneur constructor")
  if(router.url.includes("/home/freelancer")==true)
    {console.log("HOMEE/FREELANCER")
     this.displayFreelancers()
     this.flag=false
   }
  else if (router.url.includes("/home")==true)
  { this.flag=true
    this.displayinvestors();
  }

  // console.log(this.investor_obj);
   
  this.childVar='';
}
@Input() childVar: string;


i:number=0
async displayinvestors(){
  console.log("Hey thereee!")
  await firstValueFrom(this.service.getAllInvestors()).then((body:any)=>{
    let len = body.length
    while(this.i<len){
    this.investor_obj=body;
    console.log(this.investor_obj);
    this.i++;
    }
    // console.log(this.investor_obj[1])

  })
}
j:number=0
async displayFreelancers(){
 await firstValueFrom(this.service.getAllFreelancers()).then((body:any)=>{
  let len=body.length
  while(this.j<len){
    this.freelancer_obj=body;
    console.log(this.freelancer_obj);
    this.j++;
  }
 })
}

viewInvestors(uuid:any){
  console.log('inside view Investors')
  this.router.navigate(
   ['/view'],
   {queryParams:{id:uuid, type:'investor'}})

}

viewFreelancers(uuid:any){
  this.router.navigate(
    ['/view'],
    {queryParams:{id:uuid, type:'freelancer'}})
}
}
