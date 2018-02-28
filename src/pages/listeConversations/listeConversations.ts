import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
//pages
import { ConversationPage } from '../conversation/conversation';
import { ProfilePage } from '../profile/profile';
import { ApiProvider } from '../../providers/api/api';
import { MainProvider } from "../../providers/main/main";

@Component({
  selector: 'page-liste-conversations',
  templateUrl: 'listeConversations.html'
})
export class ListeConversationsPage {

  toUser : {toUserId: string, toUserName: string};
  d : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, public menu:MenuController, private provider:MainProvider) {
    this.provider.currentView = 'ListeConversationsPage';
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }

    var ids = {table: []};
    ids.table.push({idoffre: 1, iddemande:2});
    var json_ids = JSON.stringify(ids);

    //this.d = this.api.allDialogUser(json_ids).length
  }

  ionViewWillLeave() {
      console.log("tutu");
      this.menu.swipeEnable(true, 'mainMenu');
    }

  openConversation(){
    this.navCtrl.push(ConversationPage, this.toUser);
  }


}
