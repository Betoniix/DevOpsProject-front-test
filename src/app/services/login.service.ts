import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3301";

  login(usuario: Usuario): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, usuario);
  }

  // Método para almacenar el token en el localStorage
  setToken(token: string): void {
    localStorage.setItem('Token', token);
  }

  getToken(): String | null {
    return localStorage.getItem('Token');
  }

}
