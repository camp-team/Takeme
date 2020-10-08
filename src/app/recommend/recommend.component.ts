import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
})
export class RecommendComponent implements OnInit {
  projects = this.articleSerive.projects;

  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    slidesPerView: 4,
  };
  selectedProjectId = 0;
  constructor(private articleSerive: ArticleService) {}

  ngOnInit(): void {}
}
