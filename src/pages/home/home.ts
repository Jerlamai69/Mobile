import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { UserProvider } from '../../providers/user/user';
import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {
  users: any;
  islogged: boolean = false;
  constructor(public navCtrl: NavController,public userProvider:UserProvider) {

  }
  ionViewDidLoad() {
    this.userProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
     localStorage.setItem('User', JSON.stringify(data))
    });
  }


  inituserlogged(data){
    this.islogged = true;

  }

  login(){
    this.navCtrl.push(HomePage)
  }
}
