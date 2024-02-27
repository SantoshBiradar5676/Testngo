import { Component } from '@angular/core';
import { NgoserviceService } from '../../services/ngoservice.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private service: NgoserviceService, private router:Router){
   
  }
  submitted=false;
  user = new User();

  
  onSubmit(){
    this.save();
    this.submitted=true;
  
  }
  gotoHome(){
    this.router.navigate(['/']);
   }
  save() {
   this.service.createUser(this.user).subscribe();
 
  }
}