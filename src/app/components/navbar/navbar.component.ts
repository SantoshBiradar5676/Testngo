import { Component } from '@angular/core';
import { User } from '../../models/User';
import { NgoserviceService } from '../../services/ngoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private service:NgoserviceService, private router:Router){

  }
  user:User=new User();
  

 
 createUser(){
  this.router.navigate(['add']);
 
 }
 

}