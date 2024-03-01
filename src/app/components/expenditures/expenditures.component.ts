import { Component } from '@angular/core';
import { Expenditure } from '../../models/Expenditures';
import { NgoserviceService } from '../../services/ngoservice.service';
import { Router } from '@angular/router';
import { Ngo } from '../../models/Ngo';

@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.component.html',
  styleUrl: './expenditures.component.css'
})
export class ExpendituresComponent {
   exp: Expenditure = new Expenditure(); // Initialize an empty Expenditure object
  ngos: Ngo[] = []; // Initialize an empty array to store NGOs
  submitted = false; // Track whether the form has been submitted

  constructor(private ngoservice: NgoserviceService) { }

  ngOnInit(): void {
    // Fetch NGOs when the component initializes
    this.fetchNgos();
  }

  fetchNgos(): void {
  
    this.ngoservice.getAllNgo().subscribe(
      (ngos: Ngo[]) => {
        this.ngos = ngos; // Assign fetched NGOs to ngos array
      },
      (      error: any) => {
        console.error('Error fetching NGOs:', error);
        // Handle error, display error message, etc.
      }
    );
  }

  onSubmit(): void {
    // Call your service method to save the expenditure
    this.ngoservice.addExpenditure(this.exp).subscribe(
      response => {
        console.log('Expenditure saved successfully:', response);
        this.submitted = true; // Set submitted flag to true
        this.exp = new Expenditure(); // Clear the form after submission
      },
      error => {
        console.error('Error saving expenditure:', error);
        // Handle error, display error message, etc.
      }
    );
  }
}
