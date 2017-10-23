import { Component, OnInit } from '@angular/core';
import {AppGlobals} from "../globals";
@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.component.html',
  styleUrls: ['./cobertura.component.css']
})
export class coberturaComponent implements OnInit {

  constructor(  public _global: AppGlobals) { 

  }

  ngOnInit() {
  }

}
