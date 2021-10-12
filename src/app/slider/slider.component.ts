import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

 images = ['../assets/images/1.jpg', '../assets/images/2.jpg','../assets/images/3.jpg']
imagenes:any[]=[
  { name: 'Casas principales',
    img: '../../assets/images/casas.jpg',
    desc: 'casas principales de nuestra pagina web'
  },

  { name: 'Casas más grandes',
    img: '../../assets/images/inmobiliariocabecera-portada.jpg',
    desc: 'casas grandes principales de nuestra pagina web'
  }

];
  constructor(private _config:NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}
