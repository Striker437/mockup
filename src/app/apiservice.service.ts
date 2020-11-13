import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Models/Model';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    let API_URL = 'http://localhost:8080/base/product/getall'
    return this.http.get<Product[]>(API_URL);
}
}
