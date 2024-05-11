import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { AsignacionesService } from './asignaciones.service';
import { Asignacion } from './asignaciones.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Coductor } from './conductores.interface';
import { Vehiculo } from './vehiculos.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asignaciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './asignaciones.component.html',
  styleUrl: './asignaciones.component.css',
})
export class AsignacionesComponent implements OnInit {
  private modalService = inject(NgbModal);
  constructor(private service: AsignacionesService) {}
  asignaciones: Asignacion[] = [];
  edicionAsignacion!: Asignacion;
  conductores: Coductor[] = [];
  vehiculos: Vehiculo[] = [];

  idAsignacion!: number;
  idVehiculo!: string;
  idConductor!: string;

  nuevoIdVehiculo!: string;
  nuevoIdConductor!: string;

  ngOnInit(): void {
    this.ObtenerAsignaciones();

    this.service
      .ObtenerConductores()
      .subscribe((response) => (this.conductores = response.data));
    this.service
      .ObtenerVehiculos()
      .subscribe((response) => (this.vehiculos = response.data));
  }

  ObtenerAsignaciones() {
    this.service.RecuperarAsignaciones().subscribe((result) => {
      this.asignaciones = result.data;
    });
  }

  AbrirEditarModal(content: TemplateRef<any>, asignacion: Asignacion) {
    this.idAsignacion = asignacion.id;
    this.idVehiculo = asignacion.vehiculo.id.toString();
    this.idConductor = asignacion.conductor.id.toString();

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(() => {
        this.ActualizarAsignacion();
      })
      .catch((err) => {});
  }

  ActualizarAsignacion() {
    this.service
      .EditarAsignacion({
        idAsignacion: this.idAsignacion,
        idConductor: parseInt(this.idConductor),
        idVehiculo: parseInt(this.idVehiculo),
      })
      .subscribe((result) => {
        alert(result.message);
        this.ObtenerAsignaciones();
      });
  }

  AbrirNuevaAsignacionModal(content: TemplateRef<any>) {
    this.nuevoIdConductor = '0';
    this.nuevoIdVehiculo = '0';

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(() => {
        this.service
          .CrearAsignacion({
            idConductor: parseInt(this.nuevoIdConductor),
            idVehiculo: parseInt(this.nuevoIdVehiculo),
          })
          .subscribe((result) => {
            alert(result.message);
          });
        this.ObtenerAsignaciones();
      });
  }

  EliminarAsignacion(id: number) {
    this.service
      .BorrarAsignacion(id)
      .subscribe((result) => alert(result.message));
    this.ObtenerAsignaciones();
  }
}
