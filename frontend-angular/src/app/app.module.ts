import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './user-login/user-login.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';
import { InvestorComponent } from './user/investor/investor.component';
import { FreelancerComponent } from './user/freelancer/freelancer.component';
import { EntrepreneurComponent } from './user/entrepreneur/entrepreneur.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    LandingComponent,
    UserComponent,
    InvestorComponent,
    FreelancerComponent,
    EntrepreneurComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
