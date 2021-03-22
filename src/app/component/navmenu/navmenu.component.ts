import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss'],
})
export class NavmenuComponent implements OnInit {
  navigate: any;

  constructor() { }

  ngOnInit() {
    this.sideMenu();
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Dashboard",
        icon  : "material-icons",
        children: [
          {
            title : "Sales Monitoring",
            url   : "",
            icon  : "home-outline"
          },
          {
            title : "Property Analytics",
            url   : "",
            icon  : "cash-outline"
          },
          {
            title : "Account Dashboard",
            url   : "",
            icon  : "desktop-outline"
          }
        ]
      },
      {
        title : "Post Sales",
        icon  : "material-icons",
        children: [
          {
            title : "All Booking",
            url   : "/allbooking",
            icon  : "document-outline"
          },
          {
            title : "SMS Campaign",
            url   : "",
            icon  : "document-outline"
          },
          {
            title : "Email Campaign",
            url   : "",
            icon  : "mail-outline"
          }
        ]
      },
      {
        title : "Settings",
        icon  : "material-icons",
        children: [
          {
            title : "Project Setting",
            url   : "",
            icon  : "settings-outline"
          },
          {
            title : "Master",
            url   : "",
            icon  : "cog-outline"
          },
          {
            title : "Template Setting",
            url   : "",
            icon  : "contrast-outline"
          }
        ]
      },
      {
        title : "Login",
        url   : "/login",
        icon  : "log-in-outline"
      },
      {
        title : "SignUp",
        url   : "/signup",
        icon  : "push-outline"
      },
      {
        title : "Logout",
        url   : "/home",
        icon  : "log-out-outline"
      },
    ]
  }

}
