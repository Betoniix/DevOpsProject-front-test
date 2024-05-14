import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get(url);
  }

  obtenerRuta(id: number): Observable<any> {
    const url = `${this.apiUrl}/rutas/${id}`;
    return this.http.get(url);
  }

  editarRutas(id: number, ruta: Ruta): Observable<any> {
    const url = `${this.apiUrl}/rutas/${id}`;
    return this.http.put(url, ruta);
  }

  eliminarRuta(id: number): Observable<any> {
    const url = `${this.apiUrl}/rutas/${id}`;
    return this.http.delete(url);
  }
}
