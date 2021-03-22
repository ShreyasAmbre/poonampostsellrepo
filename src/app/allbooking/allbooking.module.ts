import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllbookingPageRoutingModule } from './allbooking-routing.module';

import { AllbookingPage } from './allbooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllbookingPageRoutingModule
  ],
  declarations: [AllbookingPage]
})
export class AllbookingPageModule {}
