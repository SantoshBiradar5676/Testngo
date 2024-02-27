import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgoComponent } from './components/ngo/ngo.component';
import { NgolistComponent } from './components/ngolist/ngolist.component';
import { AddDonationComponent } from './components/add-donation/add-donation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUserComponent,
    NgoComponent,
    NgolistComponent,
    AddDonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
