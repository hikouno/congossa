import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, MenuController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private googlePlus: GooglePlus,
              public menu: MenuController) {

  }

  reactionClicBouton() {
        let alert = this.alertCtrl.create({
          title: 'New Friend!',
          subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
          buttons: ['OK']
        });
        alert.present();
  }

glogin(){
  this.googlePlus.login({})
  .then(res => {console.log(res); alert("success "+JSON.stringify(res)); })
  .catch(err => {console.error(err); alert("error "+JSON.stringify(err));});
}

}
