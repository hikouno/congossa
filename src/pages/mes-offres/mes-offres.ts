import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


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

  mesOffres: any[] = [];




  qualities: string;

  shortDescription: string;




  categorie: string = "Catégorie";
  typeOfJob: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: MainProvider, public menu: MenuController) {
    this.provider.currentView = 'MesOffresPage';
    this.mesOffres = this.provider.get_mesOffres()

  }

  ionViewDidLoad() {
    console.log(this.navCtrl.last().name);
  }

  ionViewWillLeave() {
    console.log(this.navCtrl.last().name);
    this.provider.currentView = this.provider.previousView;
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

  allocateData(){
    this.qualities = this.mesOffres[0].qualities;
    this.shortDescription = this.mesOffres[0].shortDescription;
  }
}
