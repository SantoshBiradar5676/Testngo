import { Component } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { Donation } from '../../models/Donation';
import { Ngo } from '../../models/Ngo';
import { User } from '../../models/User';
import { NgoserviceService } from '../../services/ngoservice.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrl: './add-donation.component.css'
})
export class AddDonationComponent {
  donation: Donation = new Donation();
  ngos: Ngo[] = []; // Assuming you have an array of NGOs
  users: User[] = []; // Assuming you have an array of Users

  constructor(private donationService: DonationService,private service:NgoserviceService) { }

  ngOnInit() {
    
    this.fetchNgos();
    this.fetchUsers();
  }

  fetchNgos() {
   
    this.service.getAllNgo().subscribe(
      (ngos: Ngo[]) => {
        this.ngos = ngos;
      },
      (      error: any) => {
        console.error('Error fetching NGOs:', error);
      }
    );
  }
 
  fetchUsers() {
    // Call service method to fetch Users
    // Assuming you have a method called getUsers() in your service
    this.service.getAllUser().subscribe(
      (user: User[]) => {
        this.users = user;
      },
      (      error: any) => {
        console.error('Error fetching Users:', error);
      }
    );
  }

  onSubmit() {
    // Call the service method to add the donation
    this.donationService.addDonation(this.donation).subscribe(
      (      response: any) => {
        console.log('Donation added successfully:', response);
        // You may redirect the user or show a success message here
      },
      (      error: any) => {
        console.error('Error adding donation:', error);
        // Handle error, show error message, etc.
      }
    );
  }
}