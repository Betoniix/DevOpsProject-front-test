import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RutasService } from '../services/rutas.service';
import { Router } from '@angular/router';
import { Ruta } from '../interfaces/ruta.interface';
import { CommonModule } from '@angular/common';
import { RutaSinId } from '../interfaces/rutaSinId.interface';

@Component({
  selector: 'app-rutas-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rutas-table.component.html',
  styleUrl: './rutas-table.component.css'
})
export class RutasTableComponent implements OnInit {
  rutas: any[] | undefined;
  idRuta: any = '';
  rutaSeleccionada: Ruta | null = null;
  toastContent: string = '';
  showToast: boolean = false;


  public addRutaForm: FormGroup = new FormGroup({ // Inicializa FormGroup
    nombre_ruta: new FormControl(''),
    long_empresa: new FormControl(''),
    lat_empresa: new FormControl(''),
    long_destino: new FormControl(''),
    lat_destino: new FormControl(''),
    fecha_recorrido: new FormControl(''),
    fecha_creacion: new FormControl(''),
    exitoso: new FormControl(''),
    descripcion_problema: new FormControl(''),
    comentarios: new FormControl(''),
    id_asignacion: new FormControl(0),
  });


  constructor(private rutaService: RutasService) { }

  ngOnInit(): void {
    this.obtenerRutas();
  }

  capturarRuta(ruta: any) {
    this.rutaSeleccionada = ruta;
    this.idRuta = ruta.id;
    console.log("esta es la ruta sleccionada" + this.idRuta);
    this.actualizarRutaForm(ruta); // Llama a rellenarFormulario() al seleccionar un administrador
  }

  capturarId(id: string) {
    this.idRuta = id;
  }

  resetRuta(): void {
    this.addRutaForm.reset();
  }

  obtenerRutas(): void {
    this.rutaService.obtenerRutas().subscribe(
      (data: any) => {
        this.rutas = data;
        console.log(this.rutas);

      },
      (error) => {
        console.error('Error al obtener rutas', error);
      }
    );
  }

  eliminarRuta(id: any) {
    this.rutaService.eliminarRuta(id).subscribe(
      (data: Ruta) => {
        this.rutaSeleccionada = data;
        this.refreshPage();
      },
      (error) => {
        console.error('Error al eliminar ruta', error);
      }
    );
  }

  rellenarFormulario() {
    if (this.rutaSeleccionada) {
      this.addRutaForm.patchValue({ // Usa patchValue para rellenar el formulario
        nombre_ruta: this.rutaSeleccionada.nombre_ruta,
        long_empresa: this.rutaSeleccionada.long_empresa,
        lat_empresa: this.rutaSeleccionada.lat_empresa,
        long_destino: this.rutaSeleccionada.long_destino,
        lat_destino: this.rutaSeleccionada.lat_destino,
        fecha_recorrido: this.rutaSeleccionada.fecha_recorrido,
        fecha_creacion: this.rutaSeleccionada.fecha_creacion,
        exitoso: this.rutaSeleccionada.exitoso,
        descripcion_problema: this.rutaSeleccionada.descripcion_problema,
        comentarios: this.rutaSeleccionada.comentarios,
        id_asignacion: this.rutaSeleccionada.id_asignacion,
      });
    }
  }

  agregarRutas(): void {

    const ruta: Ruta = {
      id: this.addRutaForm.value.id,
      nombre_ruta: this.addRutaForm.value.nombre_ruta,
      long_empresa: this.addRutaForm.value.long_empresa,
      lat_empresa: this.addRutaForm.value.lat_empresa,
      long_destino: this.addRutaForm.value.long_destino,
      lat_destino: this.addRutaForm.value.lat_destino,
      fecha_recorrido: new Date(this.addRutaForm.value.fecha_recorrido).toISOString(),
      fecha_creacion: new Date(this.addRutaForm.value.fecha_creacion).toISOString(),
      exitoso: Boolean(Number(this.addRutaForm.value.exitoso)),
      descripcion_problema: this.addRutaForm.value.descripcion_problema,
      comentarios: this.addRutaForm.value.comentarios,
      id_asignacion: parseInt(this.addRutaForm.value.id_asignacion),
    };
    console.log(ruta);

    this.rutaService.agregarRutas(ruta).subscribe(
      (data: any) => {
        console.log('Ruta agregada exitosamente:', data);
        this.refreshPage();
      },
      (error: any) => {
        console.log("ESTA ES LA RUTA:" + JSON.stringify(ruta));
        console.error('Error al agregar ruta:', error);
        this.toastContent = error.message;
        this.toggleToast();
      }
    );

  }
  toggleToast() {
    this.showToast = !this.showToast;
  }

  actualizarRutaForm(ruta: any): void {
    if (this.rutaSeleccionada) {
      this.rutaSeleccionada = ruta;

      this.addRutaForm.patchValue({
        id: (ruta.id),
        nombre_ruta: (ruta.nombre_ruta),
        long_empresa: (ruta.long_empresa),
        lat_empresa: (ruta.lat_empresa),
        long_destino: (ruta.long_destino),
        lat_destino: (ruta.lat_destino),
        fecha_recorrido: (ruta.fecha_recorrido),
        fecha_creacion: (ruta.fecha_creacion),
        exitoso: (ruta.exitoso),
        descripcion_problema: (ruta.descripcion_problema),
        comentarios: (ruta.comentarios),
        id_asignacion: (ruta.id_asignacion)
      });

    }

  }

  editarRuta(id: any) {
    // Verificar si this.conductorSeleccionado no es nulo
    const ruta: RutaSinId = {
      id: id,
      nombre_ruta: this.addRutaForm.value.nombre_ruta,
      long_empresa: this.addRutaForm.value.long_empresa,
      lat_empresa: this.addRutaForm.value.lat_empresa,
      long_destino: this.addRutaForm.value.long_destino,
      lat_destino: this.addRutaForm.value.lat_destino,
      fecha_recorrido: this.addRutaForm.value.fecha_recorrido,
      fecha_creacion: this.addRutaForm.value.fecha_creacion,
      exitoso: this.addRutaForm.value.exitoso,
      descripcion_problema: this.addRutaForm.value.descripcion_problema,
      comentarios: this.addRutaForm.value.comentarios
    };

    this.rutaService.editarRutas(this.idRuta, ruta).subscribe(
      (data: Ruta) => {
        this.rutaSeleccionada = data;
        console.log(ruta);
        this.refreshPage(); // Ejecutar refreshPage() solo después de .que la edición haya tenido éxito
      },
      (error) => {
        console.error('Error al editar ruta', error);
        console.log("Esta es la id" + ruta.id);
        console.log(ruta);
      }
    );
  }

  refreshPage() {
    window.location.reload();
  }

}