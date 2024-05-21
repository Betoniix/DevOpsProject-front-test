import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { Codigo } from '../interfaces/codigo.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3301";

  preRegister(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}/register/pre`;
    return this.http.post(url, usuario)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }))
  }

  register(codigo: Codigo): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, codigo)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }))
  }

  // Método para obtener el token del localStorage
  getToken(): String | null {
    return localStorage.getItem('Token');
  }
}
