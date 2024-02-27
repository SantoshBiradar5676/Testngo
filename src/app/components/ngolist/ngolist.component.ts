import { Component } from '@angular/core';
import { Ngo } from '../../models/Ngo';
import { Observable, of } from 'rxjs';
import { NgoserviceService } from '../../services/ngoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngolist',
  templateUrl: './ngolist.component.html',
  styleUrl: './ngolist.component.css'
})
export class NgolistComponent {
  public  ngos:Observable<Ngo[]> =of([]);
  constructor(private service:NgoserviceService, private router:Router){
  
  }
 ngOnInit(){
  this.getAll();
 }
 getAll(){
  return this.ngos=this.service.getAllNgo();
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

