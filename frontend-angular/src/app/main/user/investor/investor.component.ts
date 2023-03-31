import { Component, Input} from '@angular/core';
import { RESTAPIService } from 'src/app/restapiservice.service';
import {firstValueFrom} from 'rxjs';
import { Router } from "@angular/router";



@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent {
//  company_obj = [
//     { "id": 0, "name": " " },
// ];
company_obj=[
  {"entrepreneurUUID": "",
        "company_name": "",
        "is_registered": "",
        "stakeholder": "",
        "company_size": "",
        "funding_status": "",
        "equity_offered": "",
        "assets": "",
        "open_to_negotiations": "",
        "profits_in_last_fy": "",
        "pitch": " "}
]
  constructor(private service: RESTAPIService,private router: Router){
   
    this.childVar='';
    this.displayCompanies()
    

  }
  @Input() childVar: string;


//   else if (this.type=='Freelancer'){
//     this.freelancer_profile();
//     // this.service.getFreelancerUuid(this.uuid).subscribe((body:any)=>{
//     //   console.log(body['uuid'])
//     //  });
//   }
//   }
// async freelancer_profile(){
//   await firstValueFrom(this.service.getFreelancerUuid(this.uuid)).then((body: any)=>{
//     console.log(body);
//     // this.username= body['username']
//     this.phone= body['phone_number']
//     this.domain= body['domain']
//     this.institution= body['institution']
//     this.degree= body['degree']
//     this.major =body['major']
//     this.year =body['year_of_completion']
//     this.work_experience= body['work_experience']
//     this.fullName= body['firstName']+' '+body['lastName']
//   })
// }

 i:number=0
async displayCompanies(){
  await firstValueFrom(this.service.getAllCompanies()).then((body:any)=>{
    let len = body.length
  
    while(this.i<len){
      // console.log(typeof(body));
      // this.company_obj[this.i]['id']=body[this.i]['entrepreneurUUID']
      // this.company_obj[this.i]['name']=body[this.i]['company_name']
      this.company_obj=body;
    console.log(this.company_obj);
    this.i++;
    }
    console.log(this.company_obj[1])

  })
}
viewCompanies(uuid:any){
  console.log('inside view companies')
 this.router.navigate(
  ['/company'],
  {queryParams:{id:uuid}})
}


}
