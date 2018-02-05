import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'

//Pages
import {ListEmploi} from '../ListEmploi/ListEmploi'
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';

@Component({
  selector: 'page-AjoutOffrePage',
  templateUrl: 'AjoutOffrePage.html'
})
export class AjoutOffrePage {
  emploiPropose:String;
  typeContrat:String;
  myDateDeDebut:Date;
  myDateDeFin:Date;
  localisation:String;
  description:String;

  

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }
  
   myCallbackFunction = (_params) => {
     return new Promise((resolve, reject) => {
             resolve();
             this.emploiPropose=_params;
             console.error(this.emploiPropose)
         });
  }
  
 openPageEmploi(){
   this.navCtrl.push(ListEmploi, {
     callback: this.myCallbackFunction
  });
  }
  
proposer(){
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
