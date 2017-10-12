import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { coberturaComponent } from './cobertura/cobertura.component';
import { endeudamientoComponent } from './endeudamiento/endeudamiento.component';
import { estadosComponent } from './estados/estados.component';
import { liquidezComponent } from './liquidez/liquidez.component';
import { notasComponent } from './notas/notas.component';
import { periodosComponent } from './periodos/periodos.component';
import { rentabilidadComponent } from './rentabilidad/rentabilidad.component';

const routes: Routes =[
    { path: 'cobertura',      component: coberturaComponent },
    { path: 'endeudamiento',           component: endeudamientoComponent },
    { path: 'estados',          component: estadosComponent },
    { path: 'liquidez',     component: liquidezComponent },
    { path: 'notas',          component: notasComponent },
    { path: 'periodos',           component: periodosComponent },
    { path: 'rentabilidad',  component: rentabilidadComponent },
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
