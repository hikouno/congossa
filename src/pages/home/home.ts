import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import { ProfilePage } from "../profile/profile";
import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ConversationPage } from "../conversation/conversation"

import { ApiProvider } from '../../providers/api/api';
import { MainProvider } from '../../providers/main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mesDemandes: any[];
  mesDemandesCompletees : any[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,  private googlePlus: GooglePlus,
              private api: ApiProvider, private main: MainProvider) {
                this.mesDemandes=this.main.get_mesDemandes();
                this.mesDemandesCompletees = [];
                console.log(this.mesDemandes.length)
                for (var _i = 0; _i < this.mesDemandes.length; _i++) {
                  var id_demande = this.mesDemandes[_i];
                  this.mesDemandesCompletees.push([this.getName(id_demande),
                                                  this.getAge(id_demande),
                                                  this.getTypeEmploi(id_demande),
                                                  this.getTitre(id_demande),
                                                  this.getLocalisation(id_demande),
                                                  this.getQualite(id_demande),
                                                  this.getEcoleDescription(id_demande),
                                                  this.getEcole(id_demande),
                                                  this.getExperiences(id_demande),
                                                  this.getCompetences(id_demande)]);
                }
  }

  reactionClicBouton() {
        let alert = this.alertCtrl.create({
          title: 'New Friend!',
          subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
          buttons: ['OK']
        });
        alert.present();
  }

  glogin(){
    this.googlePlus.login({})
    .then(res => {console.log(res); alert("success "+JSON.stringify(res)); })
    .catch(err => {console.error(err); alert("error "+JSON.stringify(err));});
  }

  // Go to profilePage
  openProfilPage():void{
    this.navCtrl.setRoot(ProfilePage);
  }

  // Go to MessagesPages
  openMessagesPage(){
    this.navCtrl.setRoot(ListeConversationsPage);
  }

  openConversation(id_offre, id_demande){
    //this.api.newDialog(id_offre, id_demande);
    this.navCtrl.push(ConversationPage);
  }

  // AFFICHER DEMANDES
  getName(id_demande) {
    var json : any = this.api.getName({"id_demande":id_demande});
    return json.nom_prenom;
  }

  getAge(id_demande) {
    var json : any = this.api.getAge({"id_demande":id_demande})
    return json.age;
  }

  getTypeEmploi(id_demande) {
    var json : any = this.api.getTypeEmploi({"id_demande":id_demande})
    return json.typeEmploi;
  }

  getLocalisation(id_demande) {
    var json : any = this.api.getLocalisation({"id_demande":id_demande})
    return json.localisation;
  }

  getTitre(id_demande) {
    var json : any = this.api.getTitre({"id_demande":id_demande})
    return json.titre;
  }

  getQualite(id_demande) {
    var json : any = this.api.getQualite({"id_demande":id_demande})
    return json.qualite;
  }

  getEcole(id_demande) {
    var json : any = this.api.getEcole({"id_demande":id_demande})
    return json.ecole;
  }

  getEcoleDescription(id_demande) {
    var json : any = this.api.getEcoleDescription({"id_demande":id_demande})
    return json.description;
  }

  getExperiences(id_demande) {
    var json : any = this.api.getExperiences({"id_demande":id_demande})
    return json.experiences;
  }

  getCompetences(id_demande) {
    var json : any = this.api.getCompetences({"id_demande":id_demande})
    return json.competences;
  }

}
