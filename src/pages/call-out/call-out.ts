import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { LoginComponent } from '../../components/login/login';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the CallOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-out',
  templateUrl: 'call-out.html',
})
export class CallOutPage {
  public users:any;
  public Credentials: any;
  @ViewChild(Nav) nav: Nav;
  public userID:any;
  public token:any;
  loggedin:boolean = false;

  constructor(public navCtrl: NavController, public storage: Storage) {
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
  
  logout(){
    this.navCtrl.push(HomePage)
  }
  profile(){
    this.navCtrl.push(ProfilePage)
  } 

  }


