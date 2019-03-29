import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatementsService {
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getPgStatements() {
    return this.http.get(`${this.apiUrl}/stats`);
  }
}
