import { Injectable } from '@angular/core';

export interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
}

@Injectable()
export class ItemService {
  public items: Item[] = [];

  constructor() {
    this.items = [
        {
          id: 'item-1',
          title: 'Item 1',
          description: 'Description 1',
          image: 'https://avatars.io/twitter/juan'
        },
        {
          id: 'item-2',
          title: 'Item 2',
          description: 'Description 2',
          image: 'https://avatars.io/twitter/laura'
        },
        {
          id: 'item-3',
          title: 'Item 3',
          description: 'Description 3',
          image: 'https://avatars.io/twitter/luis'
        }
      ];
  }

  getItem(id): Item {
    return this.items.find(item => item.id === id);
  }
}
