import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ChercheJobPage } from "../cherche-job/cherche-job";
import { ProposeJobPage } from "../propose-job/propose-job";

/**
 * Generated class for the RecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecherchePage');
  }

  openProfilPage(){
    this.navCtrl.setRoot(ProfilePage);
  }

  openMessagesPage(){
    this.navCtrl.setRoot(ListeConversationsPage);
  }

  openChercheJobPage(){
    this.navCtrl.push(ChercheJobPage);
  }


  openProposeJobPage() {
    this.navCtrl.push(ProposeJobPage);
  }
}
