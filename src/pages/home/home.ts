import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, MenuController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { MainProvider } from "../../providers/main/main";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              private googlePlus: GooglePlus,
              public menu: MenuController,
              private provider:MainProvider) {
        this.provider.currentView = 'HomePage';
  }

  ionViewDidLoad() {
    console.log("toto");
    this.menu.swipeEnable(true, 'mainMenu');
  }
  ionViewWillLeave() {
    console.log("tata");
    this.menu.swipeEnable(false, 'mainMenu');
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
