import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conductor } from '../interfaces/conductor.interface';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3301";

  obtenerConductores(): Observable<any> {
    const url = `${this.apiUrl}/conductores/`;
    return this.http.get(url);
  }

  obtenerConductor(id: number): Observable<any> {
    const url = `${this.apiUrl}/conductores/${id}`;
    return this.http.get(url);
  }

  editarConductor(id: number, administrador: Conductor): Observable<any> {
    const url = `${this.apiUrl}/conductores/${id}`;
    return this.http.put(url, administrador);
  }

  agregarConductor(conductor: Conductor): Observable<any> {
    const url = `${this.apiUrl}/conductores`;
    return this.http.post(url, conductor);
  }

  eliminarConductor(id: number): Observable<any> {
    const url = `${this.apiUrl}/conductores/${id}`;
    return this.http.delete(url);
  }
}
