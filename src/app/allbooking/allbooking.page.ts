import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';



@Component({
  selector: 'app-allbooking',
  templateUrl: './allbooking.page.html',
  styleUrls: ['./allbooking.page.scss'],
})
export class AllbookingPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  booking_count=Array(15);

  search_form_status = true
  booking_list_cards = false
  booking_OGList = true
  booking_FList = false

  project_master = []
  broker_master = []
  project_payment_master = []
  stage_master = []

  wings_api_data = []
  floors_api_data = []
  units_api_data = []

  all_bookings = []
  filter_all_booking = []

  selected_project = [];
  selected_wing = [];
  selected_floor = [];
  selected_unit = [];
  selected_broker = [];

  search_items = []

  constructor(public http:HttpClient, public alertController: AlertController) { }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Booking!',
      message: 'Are You Sure ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async notesAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Last Follow',
      subHeader: 'Note',
      message: 'This is an Notes Of Last Follow',
      buttons: ['OK']
    });

    await alert.present();
  }

  async quickEditAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Quick Edit',
      inputs: [
        {
          name: 'Customer Name',
          type: 'text',
          placeholder: 'Edit Customer Name'
        },
        {
          name: 'Customer Number',
          type: 'text',
          placeholder: 'Edit Customer Number'
        },
        {
          name: 'Broker Name',
          type: 'text',
          placeholder: 'Edit Broker Name'
        },

        // input date with min & max
        {
          name: 'Next FollowUp',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel', );
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', JSON.stringify(data));
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    // this.getToken()
    this.getAllApi()
  }
  getAllApi(){

    let data = {"_w":{ status: 1}}

    let project_data = this.http.post('http://172.105.253.44/poonam/Apis/read/project_master', data);
    let broker_data = this.http.post('http://172.105.253.44/poonam/Apis/read/broker_master', data);
    let project_payment_data = this.http.post('http://172.105.253.44/poonam/Apis/read/project_payment_master', data);

    let stage_data_get = this.http.get('http://172.105.253.44/poonam/Apis/read/stage_master');
    
    forkJoin([project_data, broker_data, project_payment_data, stage_data_get]).subscribe(results => {

      this.project_master = results[0]["data"]
      this.broker_master = results[1]["data"]
      this.project_payment_master = results[2]["data"]
      this.stage_master = results[3]["data"]

      console.log(this.project_master, "THIS IS PROJECT MASTER")
      console.log(this.broker_master, "THIS IS BROKER MASTER")
      console.log(this.project_payment_master, "THIS PROJECT PAYMENT MASTER")
      console.log(this.stage_master, "THIS STAGE MASTER")
    });
  }

  get_wing_floor_unit(id){
    // this.selected_wing;
    // this.selected_floor;
    // this.selected_unit;
    // this.selected_broker;

    // console.log(typeof(id), "ID OF PROJECTS")
    let wings_params = {_s: "wingName", _w: {status: 1}, _g: "wingName", _wi: [{name: "project_id", values: [id]}]}
    let floors_params = {_s: "floor", _w: {status: 1}, _g: "floor", _wi: [{name: "project_id", values: [id]}]}
    let units_params = {_s: "unit_type", _w: {status: 1}, _g: "unit_type", _wi: [{name: "project_id", values: ["1"]}]}

    let wings_data = this.http.post('http://172.105.253.44/poonam/Apis/read/apartments', wings_params);
    let floors_data = this.http.post('http://172.105.253.44/poonam/Apis/read/apartments', floors_params);
    let units_payment_data = this.http.post('http://172.105.253.44/poonam/Apis/read/apartments', units_params);
    
    forkJoin([wings_data, floors_data, units_payment_data]).subscribe(results => {

      this.wings_api_data = results[0]["data"]
      this.floors_api_data = results[1]["data"]
      this.units_api_data = results[2]["data"]

      console.log(this.wings_api_data, "THIS IS  WING DATA")
      console.log(this.floors_api_data, "THIS IS FLOOR DATA")
      console.log(this.units_api_data, "THIS UNIT DATA")
    });
  }
  fetchallbookings(){
    
    // console.log(this.selected_project)
    // console.log(this.selected_wing)
    // console.log(this.selected_floor)
    // console.log(this.selected_unit)
    // console.log(this.selected_unit)
    // console.log(this.selected_broker)
    let all_booking_params = {project_id: this.selected_project, wingName: this.selected_wing, 
                              floor: this.selected_floor, unit_type: this.selected_unit, broker_id: this.selected_broker}

    this.http.post("http://172.105.253.44/poonam/Apis/getAllBookings", all_booking_params)
    .subscribe((response:any)=>{
      
      this.all_bookings = response.data
      this.filter_all_booking = response.data
      console.log(this.all_bookings, "ALL BOOKING DATA")

      if(this.all_bookings.length > 1){
        this.search_form_status = false
        this.booking_list_cards = true
      }
      

    }, (errors) => {
      console.log("Server Issue", errors.message)
    })
  }
  opensearchform(){
    this.search_form_status = true
    this.booking_list_cards = false
  }

  filterItems(searchTerm) {
    console.log("555555555")
    this.booking_FList = true
    this.booking_OGList = false
    if(searchTerm == ""){
      this.booking_OGList = true
      this.booking_FList = false
    }else{
      this.filter_all_booking = this.all_bookings.filter(item => {
        return item.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || 
        item.flatNo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
    }
  }



  delete(){
    console.log("test ")
    // this.presentAlert()
    this.presentAlertConfirm()
  }
  notes(){
    this.notesAlert()
    // console.log("Show Notes")
  }
  quickedit(){
    this.quickEditAlertPrompt()

  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.booking_count.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  

  // getToken() {
  //   const messaging = firebase.messaging();
  //   // [START messaging_get_token]
  //   // Get registration token. Initially this makes a network call, once retrieved
  //   // subsequent calls to getToken will return from cache.
  //   messaging.getToken({ vapidKey: 'BGlCLUA5avL1mFVz0abpBkIKAfx-Ig6s60Ukz0OTcmrUj1rb26j6iYKciQ8zHbKhkY0GX7wO0fntkCZvS1SJ2-g' })
  //   .then((currentToken) => {
  //     if (currentToken) {
  //       // Send the token to your server and update the UI if necessary
  //       // ...
  //       console.log(currentToken, "Cureent Token Will Be Printed")
  //     } else {
  //       // Show permission request UI
  //       console.log('No registration token available. Request permission to generate one.');
  //       // ...
  //     }
  //   }).catch((err) => {
  //     console.log('An error occurred while retrieving token. ', err, "88888888888888888888888888888888888");
  //     // ...
  //   });
  //   // [END messaging_get_token]

  // }
}

