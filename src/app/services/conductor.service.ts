import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { Conductor } from '../interfaces/conductor.interface';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3301";

  obtenerConductores(): Observable<any> {
    const url = `${this.apiUrl}/conductores/`;
    return this.http.get(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }));
  }

  obtenerConductor(id: number): Observable<any> {
    const url = `${this.apiUrl}/conductores/${id}`;
    return this.http.get(url)      .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error); // Return a new Observable with the error
      }));
  }

  editarConductor(id: number, administrador: Conductor): Observable<any> {
    const url = `${this.apiUrl}/conductores/${id}`;
    return this.http.put(url, administrador)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }));
  }

  agregarConductor(conductor: Conductor): Observable<any> {
    const url = `${this.apiUrl}/conductores`;
    return this.http.post(url, conductor)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }));
  }

  eliminarConductor(id: number): Observable<any> {
    const url = `${this.apiUrl}/conductores/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }));
  }
}
