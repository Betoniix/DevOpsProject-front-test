import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Car} from "../interfaces/car.interface";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/vehiculos`).pipe(map((response:any) => response.data));
  }

}
