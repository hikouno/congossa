import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';

//Pages
import { ProfilePage } from "../profile/profile";
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ConversationPage } from "../conversation/conversation"
import { ChatService, ChatMessage, UserInfo } from "../../providers/chat/chat-service";
import { MainProvider } from "../../providers/main/main";

/**
 * Generated class for the ResultatRecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-resultat-recherche',
  templateUrl: 'resultat-recherche.html',
})
export class ResultatRecherchePage {

  profile : any;
  offresCorrespondantes: any[] = [];
  demandesCorrespondantes: any[] = [];

  propose_ou_cherche: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private provider:MainProvider) {
    this.provider.currentView = 'ResultatRecherchePage';
    this.provider.previousView = 'ResultatRecherchePage';
    this.profile =  this.provider.get_profile();
    this.propose_ou_cherche = this.provider.propose_ou_cherche;
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(true, 'mainMenu');
  }
  ionViewWillLeave() {
    this.menu.swipeEnable(false, 'mainMenu');
  }


  // Go to profilePage
  openProfilPage():void{
    this.navCtrl.push(ProfilePage);
  }

  // Go to MessagesPages
  openMessagesPage(){
    this.navCtrl.push(ListeConversationsPage);
  }
}
