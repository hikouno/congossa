import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';


//Pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { MainProvider } from "../../providers/main/main";

@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html'
})

export class ParametresPage {

  gps_enabled:boolean;
  distance_max:number;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public menu: MenuController, private provider:MainProvider) {
    this.provider.currentView = 'ParametresPage';

    this.gps_enabled = true;
    this.distance_max = 40;

    setTimeout(() => {
      console.log("toto");
      this.menu.swipeEnable(true, 'mainMenu');
  }, 50);


    /*
    //TEST NODEJS HTTP REQUEST TO API

    this.http.get("api/hello.php")
    .subscribe(data => {
        this.showAlert(JSON.stringify(data.json()))
    }, error => {
        this.showAlert(error)
        // An error happened
    }, () => {
        // Finally do something here
    });

    //END TEST REQUEST TO API*/

  }

  showAlert(text) {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewWillLeave() {
    console.log(this.navCtrl.last().name);
    this.menu.swipeEnable(true, 'mainMenu');
  }


   // Go to profilePage
  openProfilPage(){
    this.navCtrl.push(ProfilePage);
  }

	// Go to MessagesPages
  openMessagesPage(){
    this.navCtrl.push(ListeConversationsPage);
  }

}
