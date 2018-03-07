import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';


//Pages
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { MainProvider } from "../../providers/main/main";
import { ApiProvider } from "../../providers/api/api"


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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private provider: MainProvider, public menu: MenuController,
              private api : ApiProvider, private alertCtrl: AlertController) {
    this.provider.currentView = 'MesOffresPage';
    this.mesOffres = this.provider.mesOffres;
    console.log(this.mesOffres);
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

  presentConfirm(i) {
    let alert = this.alertCtrl.create({
      title: 'Supprimer cette offre ?',
      message: 'Souhaitez vous supprimer cette offre ?',
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
    this.mesOffres.splice(i,1);
  }

}
