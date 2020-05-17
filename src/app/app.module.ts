import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Applicant0Component } from './applicant0/applicant0.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Applicant1Component } from './applicant1/applicant1.component';

@NgModule({
  declarations: [
    AppComponent,
    Applicant0Component,
    Applicant1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
