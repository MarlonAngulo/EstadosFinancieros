import { Component, OnInit } from '@angular/core';
import {AppGlobals} from "../globals";

@Component({
  selector: 'app-periodos',
  templateUrl: './periodos.component.html',
  styleUrls: ['./periodos.component.css']
})
export class periodosComponent implements OnInit {


  constructor(
    public _global: AppGlobals
  ) { }

  ngOnInit() {
  
  }

}
