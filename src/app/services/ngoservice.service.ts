import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgoserviceService {
  baseUrl='http://localhost:8080';

  constructor(private http: HttpClient) { 

  }
  createUser(users:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/users`, users);
  }

  createNgo(ngo:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/ngos`, ngo);
  }
  getAllNgo():any{
    return this.http.get(`${this.baseUrl}/ngos/getAllNgos`);
  }
}
