import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3PaymentPageRoutingModule } from './tab3-payment-routing.module';

import { Tab3PaymentPage } from './tab3-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3PaymentPageRoutingModule
  ],
  declarations: [Tab3PaymentPage]
})
export class Tab3PaymentPageModule {}
