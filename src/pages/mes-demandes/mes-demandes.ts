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


  qualities: string;

  skills: string;

  phone: string;

  email: string;

  date: string;

  familynameCopy: string;

  firstname: string;

  age: number;

  shortDescription: string;

  photo: any;

  tableSkills: any;

  tableQualities: any;

  formations: Array<{title:string, formation:string}>;

  diplomes: Array<{title:string, diplome:string}>;

  experiences: Array<{title:string, experience:string, dateDebut:string, dateFin:string, period:string}>;



  categorie: string = "Catégorie";
  typeOfJob: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: MainProvider) {
    this.mesDemandes = this.provider.get_mesDemandes()
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
