import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  apiUrl ='http://localhost:3000'
  constructor(private http:HttpClient) { }

  getPgActivity(){
    return this.http.get(`${this.apiUrl}/stats`);
  }
}
