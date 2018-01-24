import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';

@Component({
  selector: 'page-liste-conversations',
  templateUrl: 'listeConversations.html'
})
export class ListeConversationsPage {
    
  conversations: Array<{id: number, target: {name: string, avatar: string}, title: string, teaser: string}>;

  constructor(public navCtrl: NavController) {
  
    this.conversations = [];
    
    this.conversations.push({
        id: 0,
        target: {name : "Michel", avatar:"avatar.png"},
        title: "test",
        teaser: "Au sujet de ..."
    });
    
    this.conversations.push({
        id: 1,
        target: {name : "Philippe", avatar:"avatar-p.png"},
        title: "Offre d'emploi 2",
        teaser: "J'ai regardé ..."
    });
    
  }
  
  convTapped(event, conv) {
    this.navCtrl.push(ConversationPage, {
      conv_info: conv
    });
  }

}
