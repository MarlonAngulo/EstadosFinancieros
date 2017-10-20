import { Component, OnInit } from '@angular/core';
import {AppGlobals} from "../globals";

declare const google: any;
interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-liquidez',
  templateUrl: './liquidez.component.html',
  styleUrls: ['./liquidez.component.css']
})
export class liquidezComponent implements OnInit {

public  CapiNetTrab: Number;

  constructor(
    public _global: AppGlobals

  ) { }


  capitalNetoDeTrabajo()
  {

    //this.CapiNetTrab = (Number(this._global.totalActivoCirculante1)) - (Number(this._global.pasivoCirculante1));
  //  console.log(this.CapiNetTrab);
  }


  ngOnInit()
  {



      // To add the marker to the map, call setMap();
    
  }

}
