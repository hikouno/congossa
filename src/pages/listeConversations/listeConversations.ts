import { Component,  OnInit } from '@angular/core';
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
  mesConversations : any;
  nbConversations : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, public menu:MenuController, private provider:MainProvider) {
    this.provider.currentView = 'ListeConversationsPage';
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
    setTimeout(() => {
      console.log("toto");
      this.menu.swipeEnable(false, 'mainMenu');
  }, 50);
  }

  async ngOnInit(): Promise<void> {
    this.mesConversations = await this.api.allDialogUser({"id_user":this.provider.profile.id}); // A MODIFIER
  }

  ionViewWillLeave() {
      this.menu.swipeEnable(true, 'mainMenu');
    }

  openConversation() {
    this.navCtrl.push(ConversationPage, this.toUser);
  }

}
