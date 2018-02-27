import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

//Pages
import { ProfilePage } from "../profile/profile";
import { ListeConversationsPage } from '../listeConversations/listeConversations';

/**
 * Generated class for the ResultatRecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-resultat-recherche',
  templateUrl: 'resultat-recherche.html',
})
export class ResultatRecherchePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  displayProfil() {
    this.navCtrl.push(ProfilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultatRecherchePage');
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
