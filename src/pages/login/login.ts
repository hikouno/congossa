import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

// Pages
import { ProfilPage } from '../profil/profil';


import { AngularFireAuth } from 'angularfire2/auth'
import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private googlePlus: GooglePlus,
              private fire: AngularFireAuth) {

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

  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res =>{
       console.log(res);
    })
  }

  logoutOfFacebook() {
    this.fire.auth.signOut();
  }

goToProfil() {
	this.navCtrl.push(ProfilPage);

}

}
