import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2CoapplicantPageRoutingModule } from './tab2-coapplicant-routing.module';

import { Tab2CoapplicantPage } from './tab2-coapplicant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2CoapplicantPageRoutingModule
  ],
  declarations: [Tab2CoapplicantPage]
})
export class Tab2CoapplicantPageModule {}
