import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-reactivo.html',
  styleUrl: './form-reactivo.css'
})
export class FormReactivo {

  formulario: FormGroup;
  listaCorreos: string[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    if(this.formulario.valid) {
      this.listaCorreos.push(this.formulario.value.correo);
      this.formulario.reset();
    }
  }

}
