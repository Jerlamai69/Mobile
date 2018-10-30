import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CallInPage } from '../pages/call-in/call-in';
import { ProfilePage } from '../pages/profile/profile';
import { CallOutPage } from '../pages/call-out/call-out';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CallOutPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public events: Events,public toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }



  }


