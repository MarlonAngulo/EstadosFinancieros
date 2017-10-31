import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';
import { AppGlobals } from'./globals';

import { coberturaComponent } from './cobertura/cobertura.component';
import { endeudamientoComponent } from './endeudamiento/endeudamiento.component';
import { estadosComponent } from './estados/estados.component';
import { liquidezComponent } from './liquidez/liquidez.component';
import { acercaDeComponent } from './acercaDe/acercaDe.component';
import { periodosComponent } from './periodos/periodos.component';
import { rentabilidadComponent } from './rentabilidad/rentabilidad.component';

import { SalesService } from './services/sales.service';



@NgModule({
  declarations: [
    AppComponent,
    coberturaComponent,
    endeudamientoComponent,
    estadosComponent,
    liquidezComponent,
    acercaDeComponent,
    periodosComponent,
    rentabilidadComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule
  ],
  providers: [AppGlobals, SalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
