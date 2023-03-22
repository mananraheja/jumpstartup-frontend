import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'',redirectTo:'landing',pathMatch:'full'}, // redirect to landing page 
  {path:'login-signup',component: UserLoginComponent},
  {path:'JumpStartUp',component: LandingComponent},
  // {path:'**' , component: pagenotfound} make a new component to implement this feature
  {path:'home',component: MainComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
