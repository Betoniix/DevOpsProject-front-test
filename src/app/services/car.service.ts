import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Car} from "../interfaces/car.interface";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE3MTU1NTQ4NzMsImV4cCI6MTcxNTU5ODA3M30._WiVhcxkemkousKAEi9r_jXK9BiDrnAPKUsbDqOFJuE'
    });
    return this.http.get<Car[]>(`${this.baseUrl}/vehiculos`, {headers}).pipe(map((response:any) => response.data));
  }

  addCar(carData: any): Observable<Car[]>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE3MTU1NTQ4NzMsImV4cCI6MTcxNTU5ODA3M30._WiVhcxkemkousKAEi9r_jXK9BiDrnAPKUsbDqOFJuE'
    });
    return this.http.post<Car[]>(`${this.baseUrl}/vehiculos`, carData,{headers})
      .pipe(map((response:any) => response.data));
  }

  updateCar(id:number, carData:any){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE3MTU1NTQ4NzMsImV4cCI6MTcxNTU5ODA3M30._WiVhcxkemkousKAEi9r_jXK9BiDrnAPKUsbDqOFJuE'
    });
    return this.http.put<Car[]>(`${this.baseUrl}/vehiculos/${id}`, carData,{headers})
      .pipe(map((response:any) => response.data));
  }

  deleteCar(id:number){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxLCJpYXQiOjE3MTU1NTQ4NzMsImV4cCI6MTcxNTU5ODA3M30._WiVhcxkemkousKAEi9r_jXK9BiDrnAPKUsbDqOFJuE'
    });
    return this.http.delete<Car[]>(`${this.baseUrl}/vehiculos/${id}`,{headers})
      .pipe(map((response:any) => response.data));
  }
}
