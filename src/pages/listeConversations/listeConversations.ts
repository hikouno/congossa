import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
//pages
import { ConversationPage } from '../conversation/conversation';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-liste-conversations',
  templateUrl: 'listeConversations.html'
})
export class ListeConversationsPage {

  toUser : {toUserId: string, toUserName: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }

  openConversation(){
    this.navCtrl.push(ConversationPage, this.toUser);
  }


}
