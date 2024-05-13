import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from './respuesta.interface';
import { Asignacion } from './asignaciones.interface';
import { Coductor } from './conductores.interface';
import { Vehiculo } from './vehiculos.interface';

export type EditarAsignacion = {
  idAsignacion: number;
  idVehiculo: number;
  idConductor: number;
};

export type NuevaAsignacion = {
  idVehiculo: number;
  idConductor: number;
};

@Injectable({
  providedIn: 'root',
})
export class AsignacionesService {
  constructor(private http: HttpClient) {}

  url_base = 'http://localhost:3300';

  RecuperarAsignaciones() {
    return this.http.get<Respuesta<Asignacion[]>>(
      this.url_base + '/asignaciones/'
    );
  }

  BorrarAsignacion(id: number) {
    return this.http.delete<Respuesta<string>>(
      this.url_base + `/asignaciones/borrar/${id}`
    );
  }

  EditarAsignacion(datos: EditarAsignacion) {
    return this.http.put<Respuesta<Asignacion>>(
      this.url_base + '/asignaciones/actualizar',
      datos
    );
  }

  ObtenerConductores() {
    return this.http.get<Respuesta<Coductor[]>>(
      this.url_base + '/conductores/'
    );
  }

  ObtenerVehiculos() {
    return this.http.get<Respuesta<Vehiculo[]>>(this.url_base + '/vehiculos/');
  }

  CrearAsignacion(crear: NuevaAsignacion) {
    return this.http.post<Respuesta<Asignacion>>(
      this.url_base + '/asignaciones/crear',
      crear
    );
  }
}
