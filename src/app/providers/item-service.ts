import { Injectable } from '@angular/core';

export interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
  videoId: string;
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
          image: 'https://avatars.io/twitter/juan',
          videoId: 'oa9cnWTpqP8'
        },
        {
          id: 'item-2',
          title: 'Item 2',
          description: 'Description 2',
          image: 'https://avatars.io/twitter/laura',
          videoId: 'x2jRs7Qqai8'
        },
        {
          id: 'item-3',
          title: 'Item 3',
          description: 'Description 3',
          image: 'https://avatars.io/twitter/luis',
          videoId: 'MqMYaT1GlWY'
        }
      ];
  }

  getItem(id): Item {
    return this.items.find(item => item.id === id);
  }
}
