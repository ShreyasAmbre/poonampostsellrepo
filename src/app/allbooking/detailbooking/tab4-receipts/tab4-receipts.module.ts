import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4ReceiptsPageRoutingModule } from './tab4-receipts-routing.module';

import { Tab4ReceiptsPage } from './tab4-receipts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4ReceiptsPageRoutingModule
  ],
  declarations: [Tab4ReceiptsPage]
})
export class Tab4ReceiptsPageModule {}
