import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgoComponent } from './components/ngo/ngo.component';
import { NgolistComponent } from './components/ngolist/ngolist.component';
import { Expenditure } from './models/Expenditures';
import { ExpendituresComponent } from './components/expenditures/expenditures.component';
import { AddDonationComponent } from './components/add-donation/add-donation.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { DonationsComponent } from './components/donations/donations.component';

const routes: Routes = [
    {path:'add',component: AddUserComponent},
    {path:'addngo',component: NgoComponent},
    {path:'list',component: NgolistComponent},
    {path:'addExp',component: ExpendituresComponent},
    {path:'addDonation', component: AddDonationComponent},
    { path: '', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'DONATE', component: DonationsComponent },
          
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
