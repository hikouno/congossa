import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';

//Pages
import { ProfilePage } from "../profile/profile";
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ConversationPage } from "../conversation/conversation"
import { ChatService, ChatMessage, UserInfo } from "../../providers/chat/chat-service";
import { MainProvider } from "../../providers/main/main";
import { ApiProvider } from "../../providers/api/api"


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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public menu: MenuController, private provider:MainProvider,
              private api: ApiProvider) {
    this.provider.currentView = 'ResultatRecherchePage';
    this.profile =  this.provider.get_profile();
    this.propose_ou_cherche = this.provider.propose_ou_cherche;

    //this.api.loadMatches();
    console.log("Matches loaded");
    console.log("offresCorrespondantes");
    console.log(this.offresCorrespondantes);
    console.log("demandesCorrespondantes");
    console.log(this.demandesCorrespondantes);

    setTimeout(() => {
      console.log("toto");
      this.menu.swipeEnable(true, 'mainMenu');
      console.log("offresCorrespondantes");
      console.log(this.provider.mesMatchOffres);
      console.log("demandesCorrespondantes");
      console.log(this.provider.mesMatchDemandes);
    }, 5000);
  }

  ionViewWillLeave() {
    this.menu.swipeEnable(false, 'mainMenu');
    this.provider.mesMatchOffres = [];
    this.provider.mesMatchDemandes = [];
  }


  // Go to profilePage
  openProfilPage():void{
    this.navCtrl.push(ProfilePage);
  }

  // Go to MessagesPages
  openMessagesPage(){
    this.navCtrl.push(ListeConversationsPage);
  }

  sauvegarder_demande(i){
    var _demande = this.clone(this.provider.mesMatchDemandes[i])
    this.provider.demandesSauvegardees.push(_demande);
  }

  sauvegarder_offre(i){
    var _offre = this.clone(this.provider.mesMatchOffres[i]);
    this.provider.offresSauvegardees.push(_offre);
  }

  clone(obj){
    if (obj != undefined){
      try{
          var copy = JSON.parse(JSON.stringify(obj));
      } catch(ex){
          alert("Vous utilisez un vieux navigateur bien pourri, qui n'est pas pris en charge par ce site");
      }
    }
    return copy;
    }
}
