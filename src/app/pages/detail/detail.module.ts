import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DetailComponent } from './detail';
import { DetailComponentRoutingModule } from './detail-routing.module';
import {NtkmeButtonModule} from '@ctrl/ngx-github-buttons';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetailComponentRoutingModule,
    NtkmeButtonModule
  ],
  declarations: [DetailComponent],
  entryComponents: [DetailComponent]
})
export class DetailModule {}
