import { Component } from '@angular/core';
//import {NgbToast} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-crud-table',
  standalone: true,
  /*imports: [
    NgbToast
  ],*/
  templateUrl: './crud-table.component.html',
  styleUrl: './crud-table.component.css'
})
export class CrudTableComponent {
/*  showToast:boolean = false;
  toastContent:string = '';

  toggleToast() {
    this.showToast = !this.showToast;
  }

  createCar(formData:any){
    this.carService.addCar(formData).subscribe((response) => {
        this.getCars();
        this.closeCreateCarModal();
      },
      (error) =>{
        this.toastContent = error.message;
        this.toggleToast();
      });
  }

  updateCar(id:number, formData:any){
    this.carService.updateCar(id,formData).subscribe((response) => {
        this.getCars();
        this.closeCreateCarModal();
      },
      (error) => {
        this.toastContent = error.message;
        this.toggleToast();
      });
  }*/
}
