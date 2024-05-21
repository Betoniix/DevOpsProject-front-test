import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Ruta } from '../interfaces/ruta.interface';
import { Respuesta } from '../asignaciones/respuesta.interface';
import { RutaSinId } from '../interfaces/rutaSinId.interface';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  agregarRutas(ruta: Ruta): Observable<any> {
    const url = `${this.apiUrl}/rutas`;
    return this.http.post(url, ruta)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }));
  }

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3301";


  obtenerRutas() {
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

  editarRutas(id: number, ruta: RutaSinId): Observable<any> {
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
