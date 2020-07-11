import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-visual',
  templateUrl: './main-visual.component.html',
  styleUrls: ['./main-visual.component.scss'],
})
export class MainVisualComponent implements OnInit {
  constructor() {
    const picsSrc = [
      '/assets/images/project:1.jpeg',
      '/assets/images/project:2.jpeg',
      '/assets/images/project:3.jpeg',
    ];
    let num = -1;

    function slideshow_timer() {
      if (num === 2) {
        num = 0;
      } else {
        num++;
      }
      document.getElementById('mypic').src = picsSrc[num];
    }

    setInterval(slideshow_timer, 3000);
  }
  ngOnInit(): void {}
}
