import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  projects = [
    {
      title: '毎日ランニング30分',
      length: '一ヶ月',
      points: '100',
      id: '1',
    },
    {
      title: '読書30分',
      length: '一ヶ月',
      points: '100',
      id: '2',
    },
    {
      title: '勉強1時間',
      length: '一ヶ月',
      points: '100',
      id: '3',
    },
    {
      title: '炭水化物抜き',
      id: '4',
    },
    {
      title: '腕立て伏せ２０回  ',
      id: '5',
    },
    {
      title: 'プロジェクト名',
      id: '6',
    },
    {
      title: 'プロジェクト名',
      id: '7',
    },
    {
      title: 'プロジェクト名',
      id: '8',
    },
    {
      title: 'プロジェクト名',
      id: '9',
    },
    {
      title: 'プロジェクト名',
      id: '10',
    },
  ];

  constructor() {}

  createArticle() {}
  deleteArticle() {}
  getArticle(id: string) {
    return this.projects.find((item) => item.id === id);
  }
  updateArticle() {}
}
