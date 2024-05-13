import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CarModalComponent} from "../car-modal/car-modal.component";
import {CarService} from "../services/car.service";
import {NgbToast} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-car-crud-table',
  standalone: true,
  imports: [
    NgForOf,
    CarModalComponent,
    NgbToast
  ],
  templateUrl: './car-crud-table.component.html',
  styleUrl: './car-crud-table.component.css'
})
export class CarCrudTableComponent implements OnInit{

  modalMode: 'create' | 'update' = 'create'; // Default to 'create'
  showCreateCarModal: boolean = false;
  selectedCar: any;
  entries: any[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
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

  deleteCar(indexToDelete:any){
    this.selectedCar = this.entries[parseInt(indexToDelete)];
    let id = this.selectedCar.id;
    console.log(id);
    this.carService.deleteCar(id).subscribe(() => {
      this.getCars();
    });
  }

  createCar(formData:any){
    this.carService.addCar(formData).subscribe(() => {
      this.getCars();
      this.closeCreateCarModal();
    });
  }

  updateCar(id:number, formData:any){
    console.log(id);
    console.log(formData);
    this.carService.updateCar(id,formData).subscribe(() => {
      this.getCars();
      this.closeCreateCarModal();
    });
  }
  modalDataHandler(formData:any){
    if(this.modalMode === 'create'){
      this.createCar(formData);
    }
    else {
      this.updateCar(formData.id,formData);
    }
  }
}
