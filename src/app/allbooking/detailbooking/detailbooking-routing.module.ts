import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailbookingPage } from './detailbooking.page';
import { Tab1ApplicantPageModule } from './tab1-applicant/tab1-applicant.module';
import {Tab1ApplicantPage} from './tab1-applicant/tab1-applicant.page'

const routes: Routes = [
  // {
  //   path: '',
  //   component: Tab1ApplicantPageModule
  // },
  // {
  //   path: 'tab1-applicant',
  //   loadChildren: () => import('./tab1-applicant/tab1-applicant.module').then( m => m.Tab1ApplicantPageModule)
  // },
  // {
  //   path: 'tab2-coapplicant',
  //   loadChildren: () => import('./tab2-coapplicant/tab2-coapplicant.module').then( m => m.Tab2CoapplicantPageModule)
  // },
  // {
  //   path: 'tab3-payment',
  //   loadChildren: () => import('./tab3-payment/tab3-payment.module').then( m => m.Tab3PaymentPageModule)
  // },


  {
    path: '',
    component: DetailbookingPage,
    children: [
      {
        path: 'tab1-applicant',
        loadChildren: () => import('./tab1-applicant/tab1-applicant.module').then(m => m.Tab1ApplicantPageModule)
      },
      {
        path: 'tab2-coapplicant',
        loadChildren: () => import('./tab2-coapplicant/tab2-coapplicant.module').then(m => m.Tab2CoapplicantPageModule)
      },
      {
        path: 'tab3-payment',
        loadChildren: () => import('./tab3-payment/tab3-payment.module').then(m => m.Tab3PaymentPageModule)
      },
      {
      path: 'tab4-receipts',
      loadChildren: () => import('./tab4-receipts/tab4-receipts.module').then( m => m.Tab4ReceiptsPageModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailbookingPageRoutingModule {}
