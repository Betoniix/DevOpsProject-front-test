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
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  formData = { name: '', email: '' };

  close(){
    this.closeModal.emit();
  }

  submitForm() {
    // Emit an event with the form data to inform parent component about form submission
    this.formSubmit.emit(this.formData);
    // You can perform additional form submission logic here if needed
  }
}
