import { Component, ViewChild } from '@angular/core';
import { ProfilePage } from '../../pages/profile/profile';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, NavController, Nav } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  @ViewChild(Nav) nav: Nav;
  users:any
  constructor(public fb: FormBuilder, 
              public navCtrl: NavController, 
              public userProvider: UserProvider,
              public loadingCtrl: LoadingController,
              ) {
    this.GetData();
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
    console.log('>>>',data);
   localStorage.setItem('User', JSON.stringify(data))
  });
}

loginUser(userID){
this.users.forEach(element => {
  if (userID.userID == element.userID && userID.password == element.password ) {
        localStorage.setItem('credentials', JSON.stringify(userID))
        console.log('loginUser => ', userID )
        this.navCtrl.push(ProfilePage ,{
          userID:userID
        })
      } else {
        this.navCtrl.setPages
            }
});
}

}

