import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
/**
 * Generated class for the SubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sub',
  templateUrl: 'sub.html',
})
export class SubPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private googlePlus: GooglePlus) {
  }

  skip_login() {
        let alert = this.alertCtrl.create({
          title: 'Login',
          subTitle: 'Skipping login (for debugging purposes)',
          buttons: ['OK']
        });
        alert.present();
  }

  glogin(){
    this.googlePlus.login({})
    .then(res => {console.log(res); alert("success "+JSON.stringify(res)); })
    .catch(err => {console.error(err); alert("error "+JSON.stringify(err));});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubPage');
  }

}
