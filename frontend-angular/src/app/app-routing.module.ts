import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'}, // redirect to landing page 
  {path:'login-signup',component: UserLoginComponent},
  {path:'home',component: LandingComponent}
  // {path:'**' , component: pagenotfound} make a new component to implement this feature
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
