import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Ruta } from '../interfaces/ruta.interface';
import { Respuesta } from '../asignaciones/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  agregarRutas(ruta: Ruta) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3301";


  obtenerRutas() {
    const url = `${this.apiUrl}/rutas/`;
    return this.http.get<Ruta[]>(url).pipe(map((response: any) => response.data));
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
