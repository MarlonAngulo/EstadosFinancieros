import { Component, OnInit } from '@angular/core';
import {AppGlobals} from "../globals";
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.css']
})
export class periodosComponent implements OnInit
{
  costoVentas;

  constructor(
    public _global: AppGlobals,
    private salesService: SalesService
  ) { }


calcularPrimerPeriodo()
{

   let f1, f2;

    f1 = this._global.f1.replace(/\//g, "-");
    f2 = this._global.f2.replace(/\//g, "-");

    //----------------------------------primer periodo-----------------------------------------------------------------
        //-----------------------------ventas-------------------------------------------------------
        this.salesService.getVentas(f1, f2).subscribe(data => {
          this._global.ventas1 = data[0].total; // Assign array to use in HTML
          console.log(this._global.ventas1);
        });
    //---------------------------------------------------------------------------------------------
    //-----------------------------RecCxP-------------------------------------------------------
    this.salesService.getRecCxP(f1, f2).subscribe(data => {
      this._global.RecCxP = data[0].RecCuentas_por_pagar; // Assign array to use in HTML
console.log(this._global.RecCxP);
    });
//---------------------------------------------------------------------------------------------

    //-----------------------------CostoVentas-------------------------------------------------------
    this.salesService.getCostoVentas(f1, f2).subscribe(data => {
      this._global.costoVentas1 = data[0].totalCostoVentas; // Assign array to use in HTML
      console.log(this._global.costoVentas1);
    });
    //---------------------------------------------------------------------------------------------


    //-----------------------------GastosOperacion-------------------------------------------------------
    this.salesService.getGastosOperacion(f1, f2).subscribe(data => {
      this._global.gastosOperacion1 = data[0].gastos_de_operacion; // Assign array to use in HTML
      console.log(this._global.gastosOperacion1);
    });
    //---------------------------------------------------------------------------------------------



    //-----------------------------UtilidadNeta-------------------------------------------------------
    this.salesService.getUtilidadNeta(f1, f2).subscribe(data => {
      this._global.utilidadNeta1 = data[0].utilidadNeta; // Assign array to use in HTML
      console.log(this._global.utilidadNeta1);
    });
    //---------------------------------------------------------------------------------------------

    //-----------------------------Cuentas_por_cobrar-------------------------------------------------------
    this.salesService.getCuentas_por_cobrar(f1, f2).subscribe(data => {
      this._global.cuentasPorCobrar1 = data[0].Cuentas_por_cobrar; // Assign array to use in HTML
      console.log(this._global.cuentasPorCobrar1);
    });

    //-----------------------------Inventario-------------------------------------------------------
    this.salesService.getInventario(f1, f2).subscribe(data => {
      this._global.inventarios1 = data[0].inventario; // Assign array to use in HTML
      console.log(this._global.inventarios1);
    });
    //---------------------------------------------------------------------------------------------


    //-----------------------------Cuentas_por_pagar-------------------------------------------------------
    this.salesService.getCuentas_por_pagar(f1, f2).subscribe(data => {
      this._global.cuentasPorPagar1 = data[0].Cuentas_por_pagar; // Assign array to use in HTML
      console.log(this._global.cuentasPorPagar1);
    });
    //---------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------


}

calcularSegundoPeriodo()
{

  let f1, f2;

   f1 = this._global.fI2.replace(/\//g, "-");
   f2 = this._global.fF2.replace(/\//g, "-");

  //----------------------------------segundo periodo-----------------------------------------------------------------
      //-----------------------------ventas-------------------------------------------------------
      this.salesService.getVentas(f1, f2).subscribe(data => {
        this._global.ventas2 = data[0].total; // Assign array to use in HTML
        console.log(this._global.ventas2);
      });
  //---------------------------------------------------------------------------------------------

  //-----------------------------RecCxP-------------------------------------------------------
  this.salesService.getRecCxP(f1, f2).subscribe(data => {
    this._global.RecCxP2 = data[0].RecCuentas_por_pagar; // Assign array to use in HTML
console.log(this._global.ventas2);
  });
//---------------------------------------------------------------------------------------------


  //-----------------------------CostoVentas-------------------------------------------------------
  this.salesService.getCostoVentas(f1, f2).subscribe(data => {
    this._global.costoVentas2 = data[0].totalCostoVentas; // Assign array to use in HTML
    console.log(this._global.costoVentas2);
  });
  //---------------------------------------------------------------------------------------------


  //-----------------------------GastosOperacion-------------------------------------------------------
  this.salesService.getGastosOperacion(f1, f2).subscribe(data => {
    this._global.gastosOperacion2 = data[0].gastos_de_operacion; // Assign array to use in HTML
    console.log(this._global.gastosOperacion2);
  });
  //---------------------------------------------------------------------------------------------


  //-----------------------------UtilidadNeta-------------------------------------------------------
  this.salesService.getUtilidadNeta(f1, f2).subscribe(data => {
    this._global.utilidadNeta2 = data[0].utilidadNeta; // Assign array to use in HTML
    console.log(this._global.utilidadNeta2);
  });
  //---------------------------------------------------------------------------------------------

  //-----------------------------Cuentas_por_cobrar-------------------------------------------------------
  this.salesService.getCuentas_por_cobrar(f1, f2).subscribe(data => {
    this._global.cuentasPorCobrar2 = data[0].Cuentas_por_cobrar; // Assign array to use in HTML
    console.log(this._global.cuentasPorCobrar2);
  });
  //---------------------------------------------------------------------------------------------

  //-----------------------------Inventario-------------------------------------------------------
  this.salesService.getInventario(f1, f2).subscribe(data => {
    this._global.inventarios2 = data[0].inventario; // Assign array to use in HTML
    console.log(this._global.inventarios2);
  });
  //---------------------------------------------------------------------------------------------


  //-----------------------------Cuentas_por_pagar-------------------------------------------------------
  this.salesService.getCuentas_por_pagar(f1, f2).subscribe(data => {
    this._global.cuentasPorPagar2 = data[0].Cuentas_por_pagar; // Assign array to use in HTML
    console.log(this._global.cuentasPorPagar2);
  });
  //---------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------


}

  ngOnInit() {
  }

}
