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







  categorie: string = "Catégorie";
  typeOfJob: any;

  profile:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: MainProvider, public menu: MenuController) {
    this.provider.currentView = 'MesOffresPage';
    this.mesOffres = this.provider.get_mesOffres();
    this.profile = this.provider.profile;
    setTimeout(() => {
      console.log("toto");
      this.menu.swipeEnable(true, 'mainMenu');
  }, 80);

  }

  ionViewDidLoad() {
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

  supprimer(i){
    this.mesOffres.splice(i,1);
  }

}
