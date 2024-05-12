import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CarModalComponent} from "../car-modal/car-modal.component";
import {CarService} from "../services/car.service";

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
export class CarCrudTableComponent implements OnInit{

  modalMode: 'create' | 'update' = 'create'; // Default to 'create'
  showCreateCarModal: boolean = false;
  selectedCar: any;
  private todos: any[] | undefined;
  entries: any[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    console.log("hola");
    this.carService.getCars().subscribe(cars => this.entries = cars);
  }

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
