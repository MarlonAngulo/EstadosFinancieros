import { Component, OnInit } from '@angular/core';
import {AppGlobals} from "../globals";

declare var $:any;

@Component({
  selector: 'app-rentabilidad',
  templateUrl: './rentabilidad.component.html',
  styleUrls: ['./rentabilidad.component.css']
})
export class rentabilidadComponent implements OnInit {

  constructor(  public _global: AppGlobals) {

  }

  ngOnInit() {
  }
}
