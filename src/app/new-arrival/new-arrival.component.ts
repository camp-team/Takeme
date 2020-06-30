import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss'],
})
export class NewArrivalComponent implements OnInit {
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
