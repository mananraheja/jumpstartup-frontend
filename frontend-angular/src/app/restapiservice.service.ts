import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService{

  url = "http://localhost:8080";

  get = {
    event: (uuid: string): Promise<any> => {
      return this.http.get(this.url+`/freelancer/${uuid}`).toPromise();
    }
   }


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
   
  uuid= localStorage.getItem('uuid')

  postCreateUser(createUser: any) {
    console.log(createUser)
    return this.http.post(this.url+'/login/signup', createUser, this.httpOptions);
  }

  postLoginUser(user: any) {
    console.log(user)
    return this.http.post(this.url+'/login', user, this.httpOptions);
  }

  postAddFreelancerDetails( details: any){
    console.log(details)
    return this.http.post(this.url+'/freelancer/add',details,this.httpOptions);
  }

  putUpdateUserDetails(details:any){
    console.log(details);
    return this.http.put(this.url+'/login/updateUser',details,this.httpOptions)
  }

  postAddInvestorDetails(details:any){
    console.log(details)
    return this.http.post(this.url+'/investor/add',details,this.httpOptions);
  }

  postAddEntrepreneurDetails(details:any){
    console.log(details)
    return this.http.post(this.url+'/entrepreneur/add',details,this.httpOptions)
  }

  getFreelancerUuid (uuid:any){
   console.log(uuid)
   return this.http.get(this.url+`/freelancer/${uuid}`)
  }

  getInvestorUuid (uuid:any){
    console.log(uuid)
    return this.http.get(this.url+`/investor/${uuid}`)
   }

   getEntrepreneurUuid (uuid:any){
    console.log(uuid)
    return this.http.get(this.url+`/entrepreneur/${uuid}`)
   }

   getAllCompanies(){ 
     return this.http.get(this.url+`/entrepreneur/`)
   }

}
