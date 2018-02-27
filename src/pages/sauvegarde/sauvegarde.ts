import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

//Pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';

/**
 * Generated class for the SauvegardePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sauvegarde',
  templateUrl: 'sauvegarde.html',
})
export class SauvegardePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SauvegardePage');
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
