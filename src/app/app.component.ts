import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number;
  lng: number;
  zoom: number;

  constructor() {
    this.lat = 4.801267;
    this.lng = -74.118113;
    this.zoom = 6;

  }

  posicionActual(){
    navigator.geolocation.getCurrentPosition(position => { 
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

    })

  }


  title = 'MapsJorgeFiquitiva';

  position = {
    lat: 4.801267,
    lng: -74.118113,
  };

  label= {
    color: 'red',
    text: 'Tu dirección'
  };


}
