import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService{

  url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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

}
