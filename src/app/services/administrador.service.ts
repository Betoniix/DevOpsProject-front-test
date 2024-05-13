import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3301";

  obtenerAdministradores(): Observable<any> {
    const url = `${this.apiUrl}/admin/`;
    return this.http.get(url);
  }

  obtenerAdministrador(id: number): Observable<any> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.get(url);
  }

  editarAdministrador(id: number, administrador: Usuario): Observable<any> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.put(url, administrador);
  }

  eliminarAdministrador(id: number): Observable<any> {
    const url = `${this.apiUrl}/admin/${id}`;
    return this.http.delete(url);
  }




}
