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
    this.f1 = "2015/01/01";
    this.f1 = this.f1.replace(/\//g, "-");
    this.f2 = "2016/01/01";
    this.f2 = this.f2.replace(/\//g, "-");
    this.salesService.getAllSales(this.f1, this.f2).subscribe(data => {
      this.costoVentas = data[0].totalCostoVentas; // Assign array to use in HTML
      console.log(this.costoVentas);
    });


  }

}
