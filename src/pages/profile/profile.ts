import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CallOutPage } from '../call-out/call-out';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { CallInPage } from '../call-in/call-in';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public items:any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.loadData();
    
  }
loadData(){
  let data:Observable<any>;
  data = this.http.get('http://localhost/API%20JSON/json.php');
  data.subscribe(result => {
  this.items = result;    
  })
}

  logout(){
    this.navCtrl.pop()
  }
  
  callout(){
    this.navCtrl.push(CallOutPage)
  }

  callin(){
    this.navCtrl.push(CallInPage)
  }
}
