import { Component, OnInit } from '@angular/core';
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
  items = [
    {
      title: 'item 1',
    },
    {
      title: 'item 2',
    },
    {
      title: 'item 3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
