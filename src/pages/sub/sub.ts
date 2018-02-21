import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import { LinkedIn } from '@ionic-native/linkedin';

import { ProfilePage } from '../profile/profile';

import {MainProvider} from "../../providers/main/main"


import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { LoginPage } from "../login/login";
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

  scopes: ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
  /*obj: ProfileObject;*/

  public static silhouetteString: string = "Votre photo de profil représente une personne : ";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private googlePlus: GooglePlus,
              private fire: AngularFireAuth,
              private linkedin: LinkedIn,
              private provider: MainProvider ) {
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
		var userInfo = res.additionalUserInfo;
    var credentialInfo = res.credential;
    var profile = userInfo.profile;

    //Store fb informations in the provider
    this.provider.set_gender(profile.gender);
    this.provider.set_id(profile.id);
    this.provider.set_locale(profile.locale);   //localization
    this.provider.set_is_silhouette(profile.picture.data.is_silhouette);
    this.provider.set_url_photo(profile.picture.data.url);
    this.provider.set_timezone(profile.timezone);
    this.provider.set_accessToken(credentialInfo.accessToken);




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

goToLogin(){
  this.navCtrl.setRoot(LoginPage);
}

}
