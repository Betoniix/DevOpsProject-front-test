import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {CarModalComponent} from "../car-modal/car-modal.component";

@Component({
  selector: 'app-car-crud-table',
  standalone: true,
  imports: [
    NgForOf,
    CarModalComponent
  ],
  templateUrl: './car-crud-table.component.html',
  styleUrl: './car-crud-table.component.css'
})
export class CarCrudTableComponent {

  modalMode: 'create' | 'update' = 'create'; // Default to 'create'
  showCreateCarModal: boolean = false;
  selectedCar: any;

  entries: any[] = [
    {
      id: 1,
      placa: 'ABC123',
      marca: 'Toyota',
      modelo: 'Corolla',
      VIN: '1HGBH41JXMN109186',
      fecha_compra: '2024-05-10',
      costo: 25000,
      url_foto: 'https://example.com/car.jpg'
    },
    {
      id: 2,
      placa: 'XYZ789',
      marca: 'Honda',
      modelo: 'Civic',
      VIN: '2HGBH41JXMN109187',
      fecha_compra: '2024-04-20',
      costo: 30000,
      url_foto: 'https://example.com/car2.jpg'
    },
    // Add more objects as needed
  ];

  openCreateCarModal(){
    this.modalMode = 'create';
    this.showCreateCarModal = true;
  }

  closeCreateCarModal(){
    this.showCreateCarModal = false;
  }

  openEditCarModal(index:any){
    this.modalMode = 'update';
    this.selectedCar = this.entries[parseInt(index)];
    this.showCreateCarModal = true;
  }

  updateEntry(formData:any){
    let index = this.entries.findIndex(entry => entry.id === formData.id);
    if (index !== -1) {
      this.entries[index].placa = formData.placa;
      this.entries[index].marca = formData.marca;
      this.entries[index].modelo = formData.modelo;
      this.entries[index].VIN = formData.VIN;
      this.entries[index].fecha_compra = formData.fecha_compra;
      this.entries[index].costo = formData.costo;
      this.entries[index].url_foto = formData.url_foto;
    }
  }

  deleteCar(indexToDelete:number){
    this.entries.splice(indexToDelete, 1);
  }
}
