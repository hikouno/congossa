import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html'
})
export class ConversationPage {
    
  conv_info: any;
  
  messages: Array<{sentByUser: boolean, text: string, time: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.conv_info = navParams.get('conv_info');
    this.messages = [];
    
    if (this.conv_info.id == 0)
    {
        this.messages.push({
            sentByUser : false,
            text : "Hello ! I'm interested by your offer.",
            time : "hier (a convertir en date js quand l'api est en place)"
        });
        
        this.messages.push({
            sentByUser : false,
            text : "Hello ?",
            time : "hier (a convertir en date js quand l'api est en place)"
        });
        
        this.messages.push({
            sentByUser : true,
            text : "Hi !",
            time : "aujourd'hui ffervfreferfrevfre"
        });
        
        this.messages.push({
            sentByUser : false,
            text : "???",
            time : "à l'instant"
        });
        
        this.messages.push({
            sentByUser : false,
            text : "???",
            time : "à l'instant"
        });
        
        this.messages.push({
            sentByUser : false,
            text : "???",
            time : "à l'instant"
        });
        
        this.messages.push({
            sentByUser : false,
            text : "???",
            time : "à l'instant"
        });
        
    }
    else
    {
        this.messages.push({
            sentByUser : true,
            text : "Hello there, I'm interested by your offer.",
            time : "à l'instant"
        });
    }
    
  }
  
}
