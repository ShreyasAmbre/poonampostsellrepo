import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4ReceiptsPage } from './tab4-receipts.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4ReceiptsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4ReceiptsPageRoutingModule {}
