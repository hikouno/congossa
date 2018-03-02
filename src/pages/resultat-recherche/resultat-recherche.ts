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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private provider:MainProvider) {
    this.provider.currentView = 'ResultatRecherchePage';
    this.profile =  this.provider.get_profile();
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(true, 'mainMenu');
  }
  ionViewWillLeave() {
    this.menu.swipeEnable(false, 'mainMenu');
  }

  displayProfil() {
    this.navCtrl.push(ProfilePage);
  }


  // Go to profilePage
  openProfilPage():void{
    this.navCtrl.setRoot(ProfilePage);
  }

  // Go to MessagesPages
  openMessagesPage(){
    this.navCtrl.setRoot(ListeConversationsPage);
  }
}
