import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ChercheJobPage } from "../cherche-job/cherche-job";
import { ProposeJobPage } from "../propose-job/propose-job";

import { MainProvider } from "../../providers/main/main"

/**
 * Generated class for the RecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage {

  profile: any;

  onlineMode: boolean = false;



  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, private provider:MainProvider) {
    this.profile = this.provider.get_profile();
    this.provider.currentView = 'RecherchePage';
    this.menu.swipeEnable(true, 'mainMenu');
    this.loadData();
    setTimeout(() => {
      console.log("toto");
      this.menu.swipeEnable(true, 'mainMenu');
  }, 50);
  }


  ionViewWillLeave() {
    console.log("tata");

  }

  loadData(){

    this.copy();
  }


  openProfilPage(){
    this.menu.swipeEnable(false, 'mainMenu');
    this.navCtrl.push(ProfilePage);
  }

  openMessagesPage(){
    this.menu.swipeEnable(false, 'mainMenu');
    this.navCtrl.push(ListeConversationsPage);
  }

  openChercheJobPage(){
    this.menu.swipeEnable(false, 'mainMenu');
    this.navCtrl.push(ChercheJobPage);
  }


  openProposeJobPage() {
    this.menu.swipeEnable(false, 'mainMenu');
    this.navCtrl.push(ProposeJobPage);
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

  copy(){

  }
}
