import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//Pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { MainProvider } from "../../providers/main/main";

/**
 * Generated class for the MesOffresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mes-offres',
  templateUrl: 'mes-offres.html',
})
export class MesOffresPage {

  mesOffres: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: MainProvider) {
    this.mesOffres = this.provider.get_mesOffres()
    console.log("Mes Demandes:")
    console.log(this.mesOffres);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesOffresPage');
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
