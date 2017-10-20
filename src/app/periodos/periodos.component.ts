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

  constructor(
    public _global: AppGlobals,
    private salesService: SalesService
  ) { }

  ngOnInit() {

    this.salesService.getAllSales('2015-01-01', '2016-01-01').subscribe(data => {
      console.log(data);
      this.costoVentas = data.totalCostoVentas; // Assign array to use in HTML
    });


  }

}
