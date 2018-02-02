import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//Pages
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ProfilePage } from '../profile/profile';


/**
 * Generated class for the StatistiquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-statistiques',
  templateUrl: 'statistiques.html',
})
export class StatistiquesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatistiquesPage');
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
