import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Nav) nav: Nav;
  users:any
  token: any;
  constructor(public fb: FormBuilder, public navCtrl: NavController, public userProvider: UserProvider) {
    this.GetData();
    this.testAuth();
  }
  userID = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  loginForm: FormGroup = this.fb.group({
    userID: this.userID,
    password: this.password,
  });


GetData() {
  this.userProvider.getUsers()
  .then(data => {
    this.users = data;
    console.log(this.users);
   localStorage.setItem('User', JSON.stringify(data))
  });
}

testAuth(){
  let data = localStorage.getItem('users');
  // this.users = JSON.parse(data);
  console.log("test")
}

loginUser(userID){
this.users.forEach(element => {
  if (userID.userID == element.userID && userID.password == element.password ) {
        console.log('TRUE')
        this.navCtrl.push(HomePage)
      } else {
        console.log(element.userID)
      }
});
console.log(userID)
}

}
