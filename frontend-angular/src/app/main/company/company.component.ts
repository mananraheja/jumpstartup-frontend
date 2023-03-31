import { Component } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { RESTAPIService } from 'src/app/restapiservice.service';
import {firstValueFrom} from 'rxjs';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  email:string=localStorage.getItem('email')??""
  type:string = localStorage.getItem('type')??""
  uuid : string = localStorage.getItem('uuid')??""
  username:string =localStorage.getItem('username')??""

  //write the entities required by company profile to display
  "fullName":string="";
  "firstName":string= "";
  "lastName":string= "";
  "phone_number":string= "";
  "domain":string= "";
  "institution":string= "";
  "degree":string= " ";
  "major":string= "";
  "year_of_completion":string= "";
  "work_experience":string= "";
  "company_name":string= "";
  "is_registered":string= "";
  "stakeholder":string="" ;
  "company_size":string= "";
  "funding_status":string="" ;
  "equity_offered":string= "";
  "assets":string= "";
  "open_to_negotiations":string= "";
  "profits_in_last_fy":string="" ;
  "pitch":string= "";

  
userId: any
constructor (private router:Router,private activatedRoute: ActivatedRoute, private service:RESTAPIService){
 
  this.activatedRoute.queryParams.subscribe(params => {
    this.userId = params['id'];
    console.log(this.userId);
  });

  this.company_profile();
}

async company_profile(){
  await firstValueFrom(this.service.getEntrepreneurUuid(this.userId)).then((body: any)=>{
    console.log(body);
    this.fullName= body['firstName']+' '+body['lastName']
    this.phone_number= body['phone_number']
    this.domain= body['domain']
    this.institution= body['institution']
    this.degree= body['degree']
    this.major =body['major']
    this.year_of_completion =body['year_of_completion']
    this.work_experience= body['work_experience']
    this.company_name=body['company_name']
    this.is_registered=body['is_registered']
    this.stakeholder=body['stakeholder']
    this.company_size=body['company_size']
    this.funding_status=body['funding_status']
    this.equity_offered=body['equity_offered']
    this.assets=body['assets']
    this.open_to_negotiations=body['open_to_negotiations']
    this.profits_in_last_fy=body['profits_in_last_fy']
    this.pitch=body['pitch']
  })
}


}
