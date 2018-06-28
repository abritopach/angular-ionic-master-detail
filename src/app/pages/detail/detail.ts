import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService, Item } from '../../providers/item-service';

import { Plugins, Capacitor } from '@capacitor/core';
// import { YoutubePlayerPlugin, YoutubePlayerWeb } from 'capacitor-youtube-player';

import { ModalController } from '@ionic/angular';

import { YoutubeModalComponent } from '../../modals/youtube.modal';

@Component({
  selector: 'app-page-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

  currentYear: Number = new Date().getFullYear();
  item: Item;

  constructor(private route: ActivatedRoute, public itemService: ItemService, private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // console.log('ionViewWillEnter');
    // console.log('this.route.snapshot', this.route.snapshot);
    const itemId = this.route.snapshot.paramMap.get('id');
    // console.log('itemId', itemId);
    this.item = this.itemService.getItem(itemId);
  }

  watchVideo() {
    console.log('DetailsPage::watchVideo | method called');
    console.log('DetailsPage::watchVideo -> platform: ' + Capacitor.platform);
    if (Capacitor.platform === 'web') {
      // this.testYoutubePlayerPluginWeb();
      this.presentModal();
    } else {
      this.testYoutubePlayerPlugin();
    }
  }

  async testYoutubePlayerPlugin() {

    const { YoutubePlayer } = Plugins;

    const result = await YoutubePlayer.echo({value: 'hola' });
    console.log('result', result);

    const playerVars = {'controls': 1, 'color': 'red', 'showinfo': 1, 'autoplay': 0, 'fs': 0, 'loop': 0, 'start': 60};
    const options = {width: 640, height: 360, videoId: this.item.videoId, playerVars: playerVars};
    const playerReady = await YoutubePlayer.initialize(options);
  }

  async presentModal() {
    const componentProps = { modalProps: { item: this.item}};
    const modal = await this.modalCtrl.create({
      component: YoutubeModalComponent,
      componentProps: componentProps
    });
    await modal.present();

    const {data} = await modal.onWillDismiss();
    if (data) {
      console.log('data', data);
    }
  }

}
