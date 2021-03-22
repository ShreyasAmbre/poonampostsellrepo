import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {ChartModule} from 'angular-highcharts';
import {NotificationModule} from '../component/notification/notification.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ChartModule,
    NotificationModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
