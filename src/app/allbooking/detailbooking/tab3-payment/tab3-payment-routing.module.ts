import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3PaymentPage } from './tab3-payment.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3PaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PaymentPageRoutingModule {}
