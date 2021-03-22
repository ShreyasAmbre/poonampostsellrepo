import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1ApplicantPageRoutingModule } from './tab1-applicant-routing.module';

import { Tab1ApplicantPage } from './tab1-applicant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1ApplicantPageRoutingModule
  ],
  declarations: [Tab1ApplicantPage]
})
export class Tab1ApplicantPageModule {}
