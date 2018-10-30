import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, Nav } from 'ionic-angular';
import { CallOutPage } from '../call-out/call-out';
import { CallInPage } from '../call-in/call-in';
import { UserProvider } from '../../providers/user/user';
import { LoginComponent } from '../../components/login/login';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public users:any;
  public Credentials: any;
  @ViewChild(Nav) nav: Nav;
  public userID:any;
  public token:any;
  loggedin:boolean = false;
  
  constructor(public navCtrl: NavController, public storage: Storage,public navParams: NavParams,
    public userProvider: UserProvider,) {
    this.CurrentUser();
  }


  CurrentUser(){
    this.Credentials = localStorage.getItem('credentials')
    if(!this.Credentials){
      this.navCtrl.setRoot(LoginComponent)
    } else {
      this.users  = JSON.parse(localStorage.getItem('User'));
      this.ppp();
    }
  }
  private userLogin: any;
  ppp(){
    // console.log('this.users : ',this.users);
    this.token = JSON.parse(this.Credentials);
    this.storage.set('userID', this.token).then((val) => {
    if(this.users) {
      (this.users).forEach(element => {
        if (val.userID === element.userID) {
          // console.log(element);
          this.userLogin = element;
        } else {
          // console.log("test")
        }
      });
    }
    })
  }

  logout(){
    localStorage.removeItem('credentials')
    this.navCtrl.push(LoginComponent)
  }
  
  callout(){
    this.navCtrl.push(CallOutPage)
  }

  callin(){
    this.navCtrl.push(CallInPage)
  }
}
