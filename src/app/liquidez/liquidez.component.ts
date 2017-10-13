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


  ngOnInit() {

      const myLatlng = new google.liquidez.LatLng(40.748817, -73.985428);
      const mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [
              {'featureType': 'water', 'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]},
              {'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{'hue': '#ff0000'},
              {'saturation': -100}, {'lightness': 99}]},
              {'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{'color': '#808080'},
              {'lightness': 54}]},
              {'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ece2d9'}]},
              {'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{'color': '#ccdca1'}]},
              {'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{'color': '#767676'}]},
              {'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{'color': '#ffffff'}]},
              {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]},
              {'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{'visibility': 'on'},
              {'color': '#b8cb93'}]},
              {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]},
              {'featureType': 'poi.sports_complex', 'stylers': [{'visibility': 'on'}]},
              {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]},
              {'featureType': 'poi.business', 'stylers': [{'visibility': 'simplified'}]}
          ]
      };
      const map = new google.liquidez.Map(document.getElementById('map'), mapOptions);
      const Marker = new google.liquidez.Marker({
          position: myLatlng,
          title: 'Hello World!'
      });
  // To add the marker to the map, call setMap();
  Marker.setMap(map);
  }

}
