import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-page-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  items: any = [];

  constructor() {
    this.items = [
      {
        title: 'Item 1',
        description: 'Description 1',
        image: 'http://i.pravatar.cc/300?img=1'
      },
      {
        title: 'Item 2',
        description: 'Description 2',
        image: 'http://i.pravatar.cc/300?img=2'
      },
      {
        title: 'Item 3',
        description: 'Description 3',
        image: 'http://i.pravatar.cc/300?img=3'
      }
    ];
  }
}
