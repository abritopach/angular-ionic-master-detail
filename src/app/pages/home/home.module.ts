import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home';
import { HomeComponentRoutingModule } from './home-routing.module';

import {NtkmeButtonModule} from '@ctrl/ngx-github-buttons';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomeComponentRoutingModule,
    NtkmeButtonModule
  ],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent]
})
export class HomeModule {}
