import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { UserProvider } from '../../providers/user/user';
import 'rxjs/add/operator/map'
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  constructor(public userProvider:UserProvider,public navCtrl: NavController) {
   
  }
 
 
}