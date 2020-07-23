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
    slidesPerView: 4,
  };
  selectedProjectId = 0;
  projects = [
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
    {
      title: 'プロジェクト名',
      explain: '詳細説明',
      people: '募集人数',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
