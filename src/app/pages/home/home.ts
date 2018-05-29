import { Component,  OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';

import { ItemService } from '../../providers/item-service';

import { Plugins, Capacitor } from '@capacitor/core';

// import { EchoPlugin, MyPlugin } from 'echo-test/dist/esm';

// import { CapacitorDataStorageSqlite } from '../../../../capacitor-data-storage-sqlite';

// import { YoutubePlayerPlugin, YoutubePlayerWeb  } from '../../../../capacitor-youtube-player/dist/esm';

import { YoutubePlayerPlugin, YoutubePlayerWeb } from 'capacitor-youtube-player';


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
    // this.testPlugin();
    if (Capacitor.platform === 'web') {
      // this.testPluginWeb();
      this.testYoutubePlayerPluginWeb();
    } else {
      console.log('device');
      // this.testPluginNative();
      this.testYoutubePlayerPlugin();
    }

    /*
    // This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    console.log('firstScriptTag', firstScriptTag);
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    (<any>window).onYouTubeIframeAPIReady = () => {
      console.log((<any>window).YT);
      const player = new (<any>window).YT.Player('player', {
        height: 360,
        width: 640,
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': this.onPlayerReady,
          // 'onStateChange': onPlayerStateChange
        }
      });
    };
    */
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
  */

  async testYoutubePlayerPlugin() {

    const { YoutubePlayer } = Plugins;

    const result = await YoutubePlayer.echo({value: 'hola' });
    console.log('result', result);
  }

  async testYoutubePlayerPluginWeb() {

    /*
    const result = await YoutubePlayerWeb.echo({value: 'hola' });
    console.log('result', result);
    */

    const options = {playerId: 'player', playerSize: {width: 640, height: 360}, videoId: 'oa9cnWTpqP8'};
    const playerReady = await YoutubePlayerWeb.initialize(options);
    console.log('playerReady', playerReady);
  }

  async stopVideo() {
    const stopVideo = await YoutubePlayerWeb.stopVideo();
    console.log('stopVideo', stopVideo);
  }

  async loadNewVideo() {
    const options = {videoId: 'nQSpMO6N0tc'};
    const loadNewVideo = await YoutubePlayerWeb.cueVideoById(options);
    console.log('loadNewVideo', loadNewVideo);
  }

  /*
 async testPlugin() {
  let result: any = await CapacitorDataStorageSqlite.set({key: 'session', value: 'Session Opened'});
  console.log('Save Data: ' + result.result);
  result = await CapacitorDataStorageSqlite.get({key: 'session'});
  console.log('Get Data: ' + result.value);
 }
 */


}

