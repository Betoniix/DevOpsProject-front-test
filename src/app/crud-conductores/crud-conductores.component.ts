import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../services/conductor.service';
import { CommonModule } from '@angular/common';
import { Conductor } from '../interfaces/conductor.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-conductores',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crud-conductores.component.html',
  styleUrl: './crud-conductores.component.css'
})
export class CrudConductoresComponent implements OnInit {


  conductores: any[] | undefined;
  idConductor: any = ''; // Variable para almacenar el ID del administrador a editar
  conductorSeleccionado: Conductor | null = null;  // Objeto para almacenar los datos del administrador editado
  public addConductorForm: FormGroup = new FormGroup({
    curp: new FormControl(''),
    nombre: new FormControl(''),
    apellidoPaterno: new FormControl(''),
    apellidoMaterno: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    direccion: new FormControl(''),
    salario: new FormControl(0),
    numeroLicencia: new FormControl(0)
  });



  constructor(private conductorService: ConductorService) { }

  ngOnInit(): void {
    this.obtenerConductores();
  }



  capturarId(id: string) {
    this.idConductor = id;
  }



  capturarConductor(conductor: any) {
    this.conductorSeleccionado = conductor;
    this.idConductor = conductor.id;
    this.actualizarConductorForm(conductor);
    console.log(this.conductorSeleccionado);
    console.log("Esta es la id del conductor: " + conductor.id);
    console.log("Esta es la fechaNacimiento del conductor: " + conductor.fecha_nacimiento);
  }



  obtenerConductores(): void {
    this.conductorService.obtenerConductores().subscribe(
      (response: any) => {
        // Asigna la lista de conductores contenida en la propiedad "data" del JSON
        this.conductores = response.data;
      },
      (error) => {
        console.error('Error al obtener conductores', error);
      }
    );
  }

  eliminarConductor(id: any) {
    this.conductorService.eliminarConductor(id).subscribe(
      () => {
        console.log('Conductor eliminado exitosamente');
        this.refreshPage();
      },
      (error) => {
        console.error('Error al eliminar conductor', error);
      }
    );
  }

  resetConductor(): void {
    this.addConductorForm.reset();
  }

  agregarConductor(): void {

    const conductor: Conductor = {
      CURP: this.addConductorForm.value.curp,
      nombres: this.addConductorForm.value.nombre,
      apellidoPaterno: this.addConductorForm.value.apellidoPaterno,
      apellidoMaterno: this.addConductorForm.value.apellidoMaterno,
      fechaNacimiento: this.addConductorForm.value.fechaNacimiento,
      direccion: this.addConductorForm.value.direccion,
      salario: parseInt(this.addConductorForm.value.salario), // Convertir a número
      numeroLicencia: parseInt(this.addConductorForm.value.numeroLicencia) // Convertir a número
    };


    this.conductorService.agregarConductor(conductor).subscribe(
      (data) => {
        console.log('Conductor agregado exitosamente:', data);
        this.refreshPage();
      },
      (error) => {
        console.log("ESTE ES EL CONDUCTOR:" + JSON.stringify(conductor));
        console.error('Error al agregar conductor:', error);
      }
    );
  }

  actualizarConductorForm(conductor: any): void {
    if (this.conductorSeleccionado) {
      this.conductorSeleccionado = conductor;

      this.addConductorForm.patchValue({
        curp: (conductor.CURP),
        nombre: (conductor.nombres),
        apellidoPaterno: (conductor.apellido_paterno),
        apellidoMaterno: (conductor.apellido_materno),
        fechaNacimiento: (conductor.fecha_nacimiento),
        direccion: (conductor.direccion),
        salario: (conductor.salario),
        numeroLicencia: (conductor.numero_licencia)
      });
      console.log("Esoy en actualizrConductorForm " + conductor.fecha_nacimiento);
    }

  }

  editarConductor(id: any) {
    // Verificar si this.conductorSeleccionado no es nulo
    const conductor: Conductor = {
      CURP: this.addConductorForm.value.curp,
      nombres: this.addConductorForm.value.nombre,
      apellidoPaterno: this.addConductorForm.value.apellidoPaterno,
      apellidoMaterno: this.addConductorForm.value.apellidoMaterno,
      fechaNacimiento: this.addConductorForm.value.fechaNacimiento,
      direccion: this.addConductorForm.value.direccion,
      salario: parseInt(this.addConductorForm.value.salario), // Convertir a número
      numeroLicencia: parseInt(this.addConductorForm.value.numeroLicencia) // Convertir a número
    };

    this.conductorService.editarConductor(this.idConductor, conductor).subscribe(
      (data: Conductor) => {
        this.conductorSeleccionado = data;
        console.log(conductor);
        this.refreshPage(); // Ejecutar refreshPage() solo después de .que la edición haya tenido éxito
      },
      (error) => {
        console.error('Error al editar conductor', error);
        console.log(conductor);
      }
    );

  }







  refreshPage() {
    window.location.reload();
  }
}
