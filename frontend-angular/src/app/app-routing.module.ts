import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import {InputFormInvestorComponent} from './input-form-investor/input-form-investor.component';
import {InputFormFreelancerComponent} from './input-form-freelancer/input-form-freelancer.component';
import {InputFormEntrepreneurComponent} from './input-form-entrepreneur/input-form-entrepreneur.component';
// import {ProfilePageComponent} from './profile-page/profile-page.component';
import { ProfileComponent } from './main/profile/profile.component';


const routes: Routes = [
  {path:'',component:LandingComponent}, // redirect to landing page 
  {path:'login-signup',component: UserLoginComponent},
  {path:'JumpStartUp',component: LandingComponent},
  // {path:'**' , component: pagenotfound} make a new component to implement this feature
  {path:'home',component: MainComponent},
  {path:'addInvestorDetails',component: InputFormInvestorComponent},
  {path:'addFreelancerDetails',component: InputFormFreelancerComponent},
  {path:'addEntrepreneurDetails',component: InputFormEntrepreneurComponent},
  {path:'profile',component: MainComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
