import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

//Pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { MainProvider } from "../../providers/main/main";

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

  offresSauvegardees : any[];
  demandesSauvegardees : any[];

  offre_ou_demande: any;

  profile : any

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private provider:MainProvider) {
    this.offre_ou_demande = "offre";
    this.provider.currentView = 'SauvegardePage';
    this.profile = this.provider.profile;
    this.offresSauvegardees = this.provider.get_offresSauvegardees();
    this.demandesSauvegardees = this.provider.get_demandesSauvegardees();
    setTimeout(() => {
      console.log("toto");
      this.menu.swipeEnable(true, 'mainMenu');
  }, 50);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SauvegardePage');
  }
  ionViewWillLeave() {
    console.log(this.navCtrl.last().name);
    this.menu.swipeEnable(false, 'mainMenu');
  }

   // Go to profilePage
  openProfilPage(){
    this.navCtrl.push(ProfilePage);
  }

	// Go to MessagesPages
  openMessagesPage(){
    this.navCtrl.push(ListeConversationsPage);
  }

  supprimer_offre(i){
    this.offresSauvegardees.splice(i,1);
  }

  supprimer_demande(i){
    this.demandesSauvegardees.splice(i,1);
  }

}
