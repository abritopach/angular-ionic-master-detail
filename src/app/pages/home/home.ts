import { Component,  OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';

import { ItemService } from '../../providers/item-service';

import { Plugins } from '@capacitor/core';

// import { EchoPlugin, MyPlugin } from 'echo-test/dist/esm';


@Component({
  selector: 'app-page-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  currentYear: number;
  // items: any;

  constructor(private platform: Platform, public itemService: ItemService) {
    // if (Capacitor.platform === 'web') {
      // this.testPluginWeb();
      // this.testYoutubePlayerPlugin();
    // } else {
      // this.testPluginNative();
    // }
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    /*
    this.items = [
      {
        title: 'Item 1',
        description: 'Description 1',
        image: ''
      },
      {
        title: 'Item 2',
        description: 'Description 2',
        image: ''
      },
      {
        title: 'Item 3',
        description: 'Description 3',
        image: ''
      },
    ];
    */
  }

  /*
  async testPluginNative() {
    const { EchoTest } = Plugins;
    const result = await EchoTest.echo({value: 'hola' });
    console.log('result', result);
  }

  async testPluginWeb() {
    const result = await MyPlugin.echo({value: 'hola' });
    console.log('result', result);
  }

  async testYoutubePlayerPlugin() {
    const result = await YoutubePlayerWeb.echo({value: 'hola' });
    console.log('result', result);
  }
  */
}

