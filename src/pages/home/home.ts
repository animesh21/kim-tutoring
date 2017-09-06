import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  browser: any;

  constructor(private iab: InAppBrowser) {

  }

  ionViewDidLoad() {
    console.log('View loaded');
    let iabOptions: InAppBrowserOptions = {
      location: 'no',
      zoom: 'no',
      shouldPauseOnSuspend: 'yes',
      closebuttoncaption: '',
      toolbar: 'no',
      enableViewportScale: 'yes',
      suppressesIncrementalRendering: 'yes',
      fullscreen: 'yes'
    };
    this.browser = this.iab.create("http://kimtutoring.com/mobile/", "_self", iabOptions);
    this.browser.show();
  }

  ionViewWillLeave() {
    this.browser.close();
  }
}
