import { Component, ViewEncapsulation } from '@angular/core';

import { ItemService } from '../../providers/item-service';

@Component({
  selector: 'app-page-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  currentYear = new Date().getFullYear();

  constructor(public itemService: ItemService) {
  }
}
