import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';


//Pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';

@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html'
})

export class ParametresPage {

  gps_enabled:boolean;
  distance_max:number;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public menu: MenuController) {

    this.gps_enabled = true;
    this.distance_max = 40;


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


   // Go to profilePage
  openProfilPage(){
    this.navCtrl.setRoot(ProfilePage);
  }

	// Go to MessagesPages
  openMessagesPage(){
    this.navCtrl.setRoot(ListeConversationsPage);
  }

}
