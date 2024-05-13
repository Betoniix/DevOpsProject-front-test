import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-car-modal',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './car-modal.component.html',
  styleUrl: './car-modal.component.css'
})
export class CarModalComponent {
  @Input() showModal: boolean = false;
  @Input() data: any;
  @Input() mode: 'create' | 'update' = 'create';
  isEditMode: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  formData = {id: '', placa: '', marca: '', modelo: '', VIN: '', costo: '', fecha_compra: '',
    url_foto: ''};

  ngOnChanges() {
    this.isEditMode = !!this.data;
    if(this.mode === 'update'){
      this.setFormInfo(this.data);
    }
  }
  close(){
    this.closeModal.emit();
  }

  submitForm() {
    this.formSubmit.emit(this.formData);
  }

  setFormInfo(data:any){
    this.formData = data;
  }
}
