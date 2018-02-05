import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { LinkedIn } from '@ionic-native/linkedin';

import { ProfilePage } from '../profile/profile';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  scopes: ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private googlePlus: GooglePlus,
              private fire: AngularFireAuth,
              private linkedin: LinkedIn) {

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
    .then(res => {console.log(res); alert("success " + JSON.stringify(res)); })
    .catch(err => {console.error(err); alert("error " + JSON.stringify(err));});
  }

  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res =>{
       console.log(res);
    })
  }

  logoutOfFacebook() {
    this.fire.auth.signOut();
  }

  loginWithLinkedIn() {
    this.linkedin.login(this.scopes, true)
      .then(() => console.log('Logged in!'))
      .catch(e => console.log('Error logging in', e));
  }

  goToProfil() {
  	this.navCtrl.push(ProfilePage);
  }

  previous() {
    this.navCtrl.pop();
  }

}
