import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';

//Pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { MainProvider } from "../../providers/main/main";
import { ApiProvider } from "../../providers/api/api"


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

  profile : any;

  mesDemandes : any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private provider: MainProvider, public menu: MenuController,
              private api: ApiProvider, private alertCtrl: AlertController) {
    this.provider.currentView = 'MesDemandesPage';
    this.profile = this.provider.get_profile();
    this.mesDemandes = this.provider.mesDemandes;
    setTimeout(() => {
      console.log("toto");
      this.menu.swipeEnable(true, 'mainMenu');
  }, 80);
  }

  ionViewWillLeave() {
    console.log("tutu");
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

  presentConfirm(i) {
    let alert = this.alertCtrl.create({
      title: 'Supprimer cette demande ?',
      message: 'Souhaitez vous supprimer cette demande ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            this.supprimer(i);
          }
        }
      ]
    });
    alert.present();
  }

  supprimer(i){
    this.mesDemandes.splice(i,1);
  }

}
