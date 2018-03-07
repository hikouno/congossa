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
  mesConversations : any = [];
  nbConversations : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, public menu:MenuController, private provider:MainProvider) {
    this.provider.currentView = 'ListeConversationsPage';
  }

  // Pour afficher la liste des conversations
  async ngOnInit(): Promise<void> {
    this.mesConversations = await this.api.allDialogUser({"id_user":this.provider.profile.id}); // récupère l'id de l'offre, de la demande, le nom de l'autre utilisateur et le dernier message
  }

  // Quitter la page
  ionViewWillLeave() {
      this.menu.swipeEnable(true, 'mainMenu');
    }

  // Ouvrir une conversation
  openConversation(offre_id, demande_id, name_opponent, ownerOfOffre) {
    var to = {offreId: offre_id, demande_id: demande_id, name_opponent:name_opponent, ownerOfOffre:ownerOfOffre}
    this.navCtrl.push(ConversationPage, to);
  }

}
