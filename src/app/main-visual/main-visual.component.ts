import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-main-visual',
  templateUrl: './main-visual.component.html',
  styleUrls: ['./main-visual.component.scss'],
})
export class MainVisualComponent implements OnInit {
  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    slidesPerView: 1,
    centeredSlides: true,
  };
  selectedProjectId = 0;
  projects = [
    {
      title: '朝ラン30分',
      explain: '詳細記載',
    },
    {
      title: '読書30分',
      explain: '詳細記載',
    },
    {
      title: '勉強30分',
      explain: '詳細記載',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
