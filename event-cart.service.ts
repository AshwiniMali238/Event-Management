import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cart } from '../data_type';

@Injectable({
  providedIn: 'root'
})
export class EventCartService {

  constructor(private http:HttpClient) { 

  }

  eventCart(){
    return this.http.get<cart[]>('http://localhost:3000/cart?_limit=10');
  }
}
