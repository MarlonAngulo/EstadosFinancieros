import { Component, OnInit } from '@angular/core';
import {AppGlobals} from "../globals";
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.css']
})
export class periodosComponent implements OnInit {
  costoVentas;
  f1:String;
  f2:String;
  constructor(
    public _global: AppGlobals,
    private salesService: SalesService
  ) { }

  ngOnInit() {


    this.f1 = "2015/12/08";
    this.f1 = this.f1.replace(/\//g, "-");
    this.f2 = "2016/08/20";
    this.f2 = this.f2.replace(/\//g, "-");
    console.log("aquiiiiiiiiiiiiiiiiiiiiii");

    //-----------------------------ventas-------------------------------------------------------
    this.salesService.getVentas(this.f1, this.f2).subscribe(data => {
      this._global.ventas1 = data[0].total; // Assign array to use in HTML
      console.log(this._global.ventas1);
    });
//---------------------------------------------------------------------------------------------

//-----------------------------CostoVentas-------------------------------------------------------
this.salesService.getCostoVentas(this.f1, this.f2).subscribe(data => {
  this._global.costoVentas1 = data[0].totalCostoVentas; // Assign array to use in HTML
  console.log(this._global.costoVentas1);
});
//---------------------------------------------------------------------------------------------


//-----------------------------GastosOperacion-------------------------------------------------------
this.salesService.getGastosOperacion(this.f1, this.f2).subscribe(data => {
  this._global.gastosOperacion1 = data[0].gastos_de_operacion; // Assign array to use in HTML
  console.log(this._global.gastosOperacion1);
});
//---------------------------------------------------------------------------------------------


//-----------------------------UtilidadNeta-------------------------------------------------------
this.salesService.getUtilidadNeta(this.f1, this.f2).subscribe(data => {
  this._global.utilidadNeta1 = data[0].utilidadNeta; // Assign array to use in HTML
  console.log(this._global.utilidadNeta1);
});
//---------------------------------------------------------------------------------------------

//-----------------------------Cuentas_por_cobrar-------------------------------------------------------
this.salesService.getCuentas_por_cobrar(this.f1, this.f2).subscribe(data => {
  this._global.cuentasPorCobrar1 = data[0].Cuentas_por_cobrar; // Assign array to use in HTML
  console.log(this._global.cuentasPorCobrar1);
});
//---------------------------------------------------------------------------------------------

//-----------------------------Inventario-------------------------------------------------------
this.salesService.getInventario(this.f1, this.f2).subscribe(data => {
  this._global.inventarios1 = data[0].inventario; // Assign array to use in HTML
  console.log(this._global.inventarios1);
});
//---------------------------------------------------------------------------------------------


//-----------------------------Cuentas_por_pagar-------------------------------------------------------
this.salesService.getCuentas_por_pagar(this.f1, this.f2).subscribe(data => {
  this._global.cuentasPorPagar1 = data[0].Cuentas_por_pagar; // Assign array to use in HTML
  console.log(this._global.cuentasPorPagar1);
});
//---------------------------------------------------------------------------------------------

  }

}
