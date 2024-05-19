import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { Ruta } from '../interface/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  agregarRutas(ruta: Ruta) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3301";

  obtenerRutas(): Observable<any> {
    const url = `${this.apiUrl}/rutas/`;
    return this.http.get(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }))
  }

  obtenerRuta(id: number): Observable<any> {
    const url = `${this.apiUrl}/rutas/${id}`;
    return this.http.get(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }))
  }

  editarRutas(id: number, ruta: Ruta): Observable<any> {
    const url = `${this.apiUrl}/rutas/${id}`;
    return this.http.put(url, ruta)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }))
  }

  eliminarRuta(id: number): Observable<any> {
    const url = `${this.apiUrl}/rutas/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }))
  }
}
