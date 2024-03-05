import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expenditure } from '../models/Expenditures';
import { Ngo } from '../models/Ngo';

@Injectable({
  providedIn: 'root'
})
export class NgoserviceService {
  baseUrl='http://localhost:8080';

  constructor(private http: HttpClient) { 

  }
//user
  createUser(users:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/users`, users);
  }
  getAllUser():any{
    return this.http.get(`${this.baseUrl}/users/getAll`);
  }

///ngo
  createNgo(ngo:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/ngos`, ngo);
  }
  getAllNgo():any{
    return this.http.get(`${this.baseUrl}/ngos/getAllNgos`);
  }
  update(ngo:object):Observable<Object>{
    return this.http.put(`${this.baseUrl}/ngo/update`, ngo);
  }
 
//expenditure
  addExpenditure(expenditure: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/expenditures`, expenditure);
  }

}
