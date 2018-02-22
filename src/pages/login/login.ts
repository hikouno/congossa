import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, Content, Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { LinkedIn } from '@ionic-native/linkedin';

import { ProfilePage } from '../profile/profile';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { Keyboard } from '@ionic-native/keyboard';
import { SubPage } from "../sub/sub";

import { ApiProvider } from "../../providers/api/api"


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  [x: string]: any;

  @ViewChild(Content) content: Content;

  scopes: ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];

  constructor(platform : Platform,
              public navCtrl: NavController,
              public alertCtrl: AlertController,
              private googlePlus: GooglePlus,
              private fire: AngularFireAuth,
              private linkedin: LinkedIn,
              private keyboard: Keyboard,
              private apiProvider: ApiProvider) {
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
    this.apiProvider.login(this.login, this.password, this.navCtrl);
  }

  previous() {
    this.navCtrl.pop();
  }

  ionViewDidEnter() {
      this.scrollToBottom();
}

  goToSub(){
    this.navCtrl.setRoot(SubPage);
  }

scrollToBottom() {
    setTimeout(() => {
        if (this.content.scrollToBottom) {
            //this.content.scrollToBottom();
        }
    }, 400)
}

}
