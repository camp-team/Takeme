import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss'],
})
export class NewArrivalComponent implements OnInit {
  projects = this.articleService.projects;

  config: SwiperConfigInterface = {
    loop: true,
    navigation: true,
    slidesPerView: 4,
  };
  selectedProjectId = 0;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {}
}
