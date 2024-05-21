import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3301";

  obtenerAdministradores(): Observable<any> {
    const url = `${this.apiUrl}/admin/`;
    return this.http.get(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }));
  }

  obtenerAdministrador(id: number): Observable<any> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.get(url);
  }

  editarAdministrador(id: number, administrador: Usuario): Observable<any> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.put(url, administrador)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }));
  }

  eliminarAdministrador(id: number): Observable<any> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }));
  }




}
