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

  showCreateCarModal: boolean = false;

  formData = {
    name: '',
    email: ''
  };

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
    this.showCreateCarModal = true;
  }

  closeCreateCarModal(){
    this.showCreateCarModal = false;
  }

  console(formData:any){
    console.log(formData);
    this.entries.push(formData);
  }
}
