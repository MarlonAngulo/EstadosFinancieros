import { Component, OnInit } from '@angular/core';
import {AppGlobals} from "../globals";

@Component({
  selector: 'app-endeudamiento',
  templateUrl: './endeudamiento.component.html',
  styleUrls: ['./endeudamiento.component.css']
})
export class endeudamientoComponent implements OnInit {

  constructor(
    public _global: AppGlobals

  ) { }

  ngOnInit() {
  }

}
