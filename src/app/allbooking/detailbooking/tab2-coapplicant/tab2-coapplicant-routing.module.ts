import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2CoapplicantPage } from './tab2-coapplicant.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2CoapplicantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2CoapplicantPageRoutingModule {}
