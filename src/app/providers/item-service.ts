import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
}

@Injectable()
export class ItemService {
  public items: Item[] = [];
  public itemsData: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {
  }

  getAllItems() {
    this.items = [
      {
        id: 'item-1',
        title: 'Item 1',
        description: 'Description 1',
        image: 'https://i.pravatar.cc/300?img=1'
      },
      {
        id: 'item-2',
        title: 'Item 2',
        description: 'Description 2',
        image: 'https://i.pravatar.cc/300?img=2'
      },
      {
        id: 'item-3',
        title: 'Item 3',
        description: 'Description 3',
        image: 'https://i.pravatar.cc/300?img=3'
      }
    ];
    this.itemsData.next(this.items);
  }

  getItem(id: string): Item {
    return this.items.find(item => item.id === id) as Item;
  }
}
