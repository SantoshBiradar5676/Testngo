import { Component } from '@angular/core';
import { NgoserviceService } from '../../services/ngoservice.service';
import { Router } from '@angular/router';
import { Ngo } from '../../models/Ngo';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrl: './ngo.component.css'
})
export class NgoComponent {
  constructor(private service: NgoserviceService, private router:Router){
   
  }
  submitted=false;
  ngo = new Ngo();

  
  onSubmit(){
    this.save();
    this.submitted=true;
   
  }
  gotoHome(){
    this.router.navigate(['/']);
   }
  save() {
   this.service.createNgo(this.ngo).subscribe();
   this.gotoHome()
  }
}