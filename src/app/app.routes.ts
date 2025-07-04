import { Routes } from '@angular/router';
import { FormNormal } from './form-normal/form-normal';
import { FormReactivo } from './form-reactivo/form-reactivo';

export const routes: Routes = [
    { path: '', component: FormNormal, title: 'Formulario Normal' },
    { path: 'reactivo', component: FormReactivo, title: 'Formulario Reactivo' }

];
