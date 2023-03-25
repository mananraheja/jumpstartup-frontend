import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './user-login/user-login.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import {UserComponent } from './main/user/user.component';
import { InvestorComponent } from './main/user/investor/investor.component';
import { FreelancerComponent } from './main/user/freelancer/freelancer.component';
import { EntrepreneurComponent } from './main/user/entrepreneur/entrepreneur.component';
import { HttpClientModule} from '@angular/common/http';
import { RESTAPIService } from './restapiservice.service';
import { InputFormInvestorComponent } from './input-form-investor/input-form-investor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { InputFormFreelancerComponent } from './input-form-freelancer/input-form-freelancer.component';
import { InputFormEntrepreneurComponent } from './input-form-entrepreneur/input-form-entrepreneur.component'




@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    LandingComponent,
    UserComponent,
    InvestorComponent,
    FreelancerComponent,
    EntrepreneurComponent,
    MainComponent,
    NavbarComponent,
    InputFormInvestorComponent,
    InputFormFreelancerComponent,
    InputFormEntrepreneurComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    // FormsModule
  ],
  providers: [
    RESTAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
