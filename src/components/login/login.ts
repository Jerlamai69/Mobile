import { Component, ViewChild } from '@angular/core';
import { ProfilePage } from '../../pages/profile/profile';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, NavController, Nav, AlertController, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Events } from 'ionic-angular';


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  @ViewChild(Nav) nav: Nav;
  public users:any = []
  constructor(public fb: FormBuilder, 
              public navCtrl: NavController, 
              public userProvider: UserProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public events: Events,
              public toastCtrl: ToastController
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
// loginUser(userID){
//   function isBigEnough(element, index, array) { 
//     return (element < 10); 
//  } 
           
//  var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
//  console.log("Test Value : " + passed );
// }
// loginUser(userID){
// let result = this.users.map(element => {
// if (userID.userID == element.userID && userID.password == element.password ) {
//     localStorage.setItem('credentials', JSON.stringify(userID))
//     console.log('loginUser => ', userID )
//              this.navCtrl.push(ProfilePage ,{
//              userID:userID })
//             return element
// } else {
//   this.presentToast();
// }

// })

// }


loginUser(userID){
  let check = false;
 for (let i = 0; i < this.users.length; i++) {
   const element = this.users[i];
   console.log(element)
   if (userID.userID == element.userID && userID.password == element.password) {
     check = true;
    localStorage.setItem('credentials', JSON.stringify(userID))
            console.log('loginUser => ', userID )
            this.navCtrl.push(ProfilePage ,{
            userID:userID })
            break
   } else {
    check = false;
   }  
 }
 if(check == false) {
  const toast = this.toastCtrl.create({
    message: 'Incorrect UserID or Password',
    duration: 3000
  });
  toast.present();
}
 }
}




