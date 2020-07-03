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

  restanrannts = [
    {
      title: 'item 1',
      name: 'ffff',
      price: '100',
    },
    {
      title: 'item 2',
      name: 'gggg',
      price: '200',
    },
    {
      title: 'item 2',
      name: 'dddd',
      price: '300',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
