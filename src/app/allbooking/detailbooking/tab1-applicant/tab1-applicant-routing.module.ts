import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1ApplicantPage } from './tab1-applicant.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1ApplicantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1ApplicantPageRoutingModule {}
