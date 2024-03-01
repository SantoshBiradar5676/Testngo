import { Component } from '@angular/core';
import { Ngo } from '../../models/Ngo';
import { Observable, of } from 'rxjs';
import { NgoserviceService } from '../../services/ngoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngolist',
  templateUrl: './ngolist.component.html',
  styleUrls: ['./ngolist.component.css'] // Update to styleUrls
})
export class NgolistComponent {

  selectedNgo: Ngo | null = null; // Hold the selected NGO details
  click: boolean = true;
  public ngos: Observable<Ngo[]> = of([]);
  totalExpenditureAmount: number = 0;

  constructor(private service: NgoserviceService, private router: Router) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.ngos = this.service.getAllNgo();
  }

  showDetails(ngo: Ngo): void {
    this.click = false;
    this.selectedNgo = ngo;
    this.calculateTotalExpenditure(); // Calculate total expenditure when NGO details are shown
  }

  goBack(): void {
    this.selectedNgo = null;
    this.click = true;
  }

  calculateTotalExpenditure() {
    if (this.selectedNgo) {
      this.totalExpenditureAmount = this.selectedNgo.expenditures.reduce((total, e) => total + e.exp_amount, 0);
    }
  }

  //  deleteNgo(id:any){
  //  return this.service.deleteNgo(id).subscribe((data)=>{
  //   console.log(data);
  //   this.getAll();
  //  })
  //  }

  //  ngoDetails(id:number){
  //   this.router.navigate(['details', id]);
  //  }
 
  //  updateDetails(id:number){
  //   this.router.navigate(['update', id])
  //  }
}
