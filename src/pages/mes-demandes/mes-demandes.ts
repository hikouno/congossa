import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { MainProvider } from "../../providers/main/main";

/**
 * Generated class for the MesDemandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mes-demandes',
  templateUrl: 'mes-demandes.html',
})
export class MesDemandesPage {

  mesDemandes : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: MainProvider) {
    this.mesDemandes = this.provider.get_mesDemandes()
    console.log("Mes Demandes:")
    console.log(this.mesDemandes);
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
