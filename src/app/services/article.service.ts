import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  projects = [
    {
      title: '「わがままボディーとはおさらば！炭水化物抜きダイエット」',
      length: '1ヶ月間',
      point: '100',
      id: '1',
      src: '/assets/images/diet.jpeg',
    },
    {
      title: '「継続こそ成功の秘訣！毎日継続３Tweet！」',
      length: '1ヶ月間',
      point: '3',
      id: '2',
      src: '/assets/images/twitter.jpeg',
    },
    {
      title: '「自己投資に勝る投資は無い！勉強１時間」',
      length: '1ヶ月間',
      point: '100',
      id: '3',
      src: '/assets/images/study.jpeg',
    },
    {
      title: '「喋り倒して英語脳へ！1日30分のEnglish Time」',
      length: '1ヶ月間',
      point: '100',
      id: '4',
      src: '/assets/images/english.jpeg',
    },
    {
      title: '「プロジェクト名」',
      length: '1ヶ月間',
      point: '100',
      id: '5',
      src: '/assets/images/diet.jpeg',
    },
    {
      title: '「プロジェクト名」',
      length: '1ヶ月間',
      point: '100',
      id: '6',
      src: '/assets/images/diet.jpeg',
    },
    {
      title: '「プロジェクト名」',
      length: '1ヶ月間',
      point: '100',
      id: '7',
      src: '/assets/images/diet.jpeg',
    },
    {
      title: '「プロジェクト名」',
      length: '1ヶ月間',
      point: '100',
      id: '8',
      src: '/assets/images/diet.jpeg',
    },
    {
      title: '「プロジェクト名」',
      length: '1ヶ月間',
      point: '100',
      id: '9',
      src: '/assets/images/diet.jpeg',
    },
    {
      title: '「プロジェクト名」',
      length: '1ヶ月間',
      point: '100',
      id: '10',
      src: '/assets/images/diet.jpeg',
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
