import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import { LinkedIn } from '@ionic-native/linkedin';

import { ProfilePage } from '../profile/profile';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
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

/*
export interface ProfileObject {
   name: string;
   email: string
}*/


export class SubPage {

  scopes: ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
  obj: ProfileObject;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
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
    .then(res => {console.log(res); alert("success "+JSON.stringify(res)); })
    .catch(err => {console.error(err); alert("error "+JSON.stringify(err));});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubPage');
  }

  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res =>{
		let object : JSON = res.additionalUserInfo;
       console.log(object.profile.email);
       console.log(object.profile.name);
       console.log(res);
       /*
       this.obj.name = object.profile.name;
       this.obj.email = object.profile.email;
       console.log("Voici l'objet : " + obj);
       * */
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
