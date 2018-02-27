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

  mesOffres: any;




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

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: MainProvider, public menu: MenuController) {
    this.provider.currentView = 'MesOffresPage';
    this.mesOffres = this.provider.get_mesOffres()

  }

  ionViewWillLeave() {
    console.log("tata");
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
