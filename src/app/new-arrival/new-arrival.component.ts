import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss'],
})
export class NewArrivalComponent implements OnInit {
  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    slidesPerView: 3,
  };
  selectedResId = 0;

  restaurants = [
    {
      name: 'item 1',
      place: 'ffff',
      price: '100',
    },
    {
      name: 'item 2',
      place: 'gggg',
      price: '200',
    },
    {
      name: 'item 2',
      place: 'dddd',
      price: '300',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
