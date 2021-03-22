import { Component, OnInit } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';

import { Chart } from 'angular-highcharts';
import {donutChartOptions, donutChartOptions2, donutChartOptions3, donutChartOptions4} from '../helper/donutChartOptions';
import {NotificationService} from '../services/notification.service';
import { Platform } from '@ionic/angular';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  chart = new Chart(donutChartOptions);
  chart2 = new Chart(donutChartOptions2);
  chart3 = new Chart(donutChartOptions3);
  chart4 = new Chart(donutChartOptions4);

  noti_data;

  constructor(private noti:NotificationService, public platform: Platform) { }

  ngOnInit() {
    console.log('Initializing HomePage');
    // this.setValue()
    // this.getNotiCount()

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    if(this.platform.is("android")){
      PushNotifications.requestPermission().then( result => {
        if (result.granted) {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          // Show some error
        }
      });
  
      // On success, we should be able to receive notifications
      PushNotifications.addListener('registration',
        (token: PushNotificationToken) => {
          alert('Push registration success, token: ' + token.value);
        }
      );
  
      // Some issue with our setup and push will not work
      PushNotifications.addListener('registrationError',
        (error: any) => {
          alert('Error on registration: ' + JSON.stringify(error));
        }
      );
  
      // Show us the notification payload if the app is open on our device
      PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotification) => {
          alert('Push received: ' + JSON.stringify(notification));
          this.noti.setNotification(JSON.stringify(notification));
        }
      );
  
      // Method called when tapping on a notification
      PushNotifications.addListener('pushNotificationActionPerformed',
        (notification: PushNotificationActionPerformed) => {
          alert('Push action performed: ' + JSON.stringify(notification));
          // this.noti.setNotification(JSON.stringify(notification));
        }
      );
    }  
    
  }

  // getNoti(){
  //   this.noti_data = this.noti.getNotification()
  // }

}
