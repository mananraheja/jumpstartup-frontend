import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import {InputFormInvestorComponent} from './input-form-investor/input-form-investor.component'


const routes: Routes = [
  {path:'',redirectTo:'landing',pathMatch:'full'}, // redirect to landing page 
  {path:'login-signup',component: UserLoginComponent},
  {path:'JumpStartUp',component: LandingComponent},
  // {path:'**' , component: pagenotfound} make a new component to implement this feature
  {path:'home',component: MainComponent},
  {path:'addInvestorDetails',component: InputFormInvestorComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
