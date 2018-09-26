import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

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
  
  public items:any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.loadData();
    
  }
loadData(){
  let data:Observable<any>;
  data = this.http.get('http://localhost/API%20JSON/JSON.php');
  data.subscribe(result => {
  this.items = result;    
  })
}
   
  logout(){
    this.navCtrl.push(HomePage)
  }
  profile(){
    this.navCtrl.push(ProfilePage)
  } 

  }


