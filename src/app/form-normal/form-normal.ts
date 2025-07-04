import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-normal',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-normal.html',
  styleUrl: './form-normal.css'
})
export class FormNormal {  
  nombre: string = '';
  listaNombres: string[] = [];


  enviar() {
    if(this.nombre.trim()) {
      this.listaNombres.push(this.nombre.trim());
      this.nombre = '';
    }
  }

}
