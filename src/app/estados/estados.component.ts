import { Component, OnInit } from '@angular/core';
import {AppGlobals} from "../globals";

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class estadosComponent implements OnInit {

  constructor(
    public _global: AppGlobals
  ) { }

  ngOnInit() {
  }

}
