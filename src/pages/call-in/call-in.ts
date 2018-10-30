import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { LoginComponent } from '../../components/login/login';
import { Storage } from '@ionic/storage';
import { Screenshot } from '@ionic-native/screenshot';
/**
 * Generated class for the CallInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-call-in',
  templateUrl: 'call-in.html',
})
export class CallInPage {
  public users:any;
  public Credentials: any;
  @ViewChild(Nav) nav: Nav;
  public userID:any;
  public token:any;
  loggedin:boolean = false;
  showSubmenu: boolean = false;
  screen: any;
  state: boolean = false;

  constructor(public navCtrl: NavController, public storage: Storage,private screenshot: Screenshot) {
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
  public userLogin: any;
  ppp(){
    console.log('this.users : ',this.users);
    this.token = JSON.parse(this.Credentials);
    console.log('this.token : ',this.token);
    this.storage.set('userID', this.token).then((val) => {
      console.log(val);
    if(this.users) {
      (this.users).forEach(element => {
        if (val.userID === element.userID) {
          console.log(element);
          this.userLogin = element;
        } else {
          console.log("test")
        }
      });
    }
    
    })
  }
  menuItemHandler(data): void {
    console.log(data);
    if (data.alternate) {
      console.log(data.alternate)
      this.showSubmenu = !this.showSubmenu
    } else {
      this.showSubmenu = false;
    }
    
  }
  
  logout(){
    localStorage.removeItem('credentials')
    this.navCtrl.push(LoginComponent)
  }
  profile(){
    this.navCtrl.push(ProfilePage)
  } 
  expandItem(item){
    item.expanded = !item.expanded
  }

  reset() {
    var self = this;
    setTimeout(function(){ 
      self.state = false;
    }, 1000);
  }
  screenShotURI() {
    this.screenshot.URI(80).then(res => {
      this.screen = res.URI;
      this.state = true;
      this.reset();
    });
  }
  }