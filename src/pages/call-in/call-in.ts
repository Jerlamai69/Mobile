import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the CallInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-in',
  templateUrl: 'call-in.html',
})
export class CallInPage {

  constructor(public navCtrl: NavController, public http: HttpClient) {

    
  }

   
  logout(){
    this.navCtrl.push(HomePage)
  }
  profile(){
    this.navCtrl.push(ProfilePage)
  } 

  }