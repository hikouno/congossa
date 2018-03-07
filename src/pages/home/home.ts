import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, MenuController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { MainProvider } from "../../providers/main/main";
import { ApiProvider } from '../../providers/api/api';

import { ListeConversationsPage } from '../listeConversations/listeConversations';
import { ConversationPage } from '../conversation/conversation';

import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profile : any;
  mesDemandesCompletees : any[];

  offres : any[] = [];
  demandes : any[] = [];

  offre_ou_demande: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,  private googlePlus: GooglePlus,
              private api: ApiProvider, private main: MainProvider, public menu: MenuController) {
                var mesDemandes;

                this.offre_ou_demande = "offre";

                this.profile = this.main.get_profile();

                this.main.currentView = 'HomePage';
                this.mesDemandesCompletees = [];
                mesDemandes=this.main.get_mesDemandes();
                console.log(mesDemandes.length);
                for (var _i = 0; _i < mesDemandes.length; _i++) {
                  var id_demande = mesDemandes[_i];
                  var t = this.getName(id_demande);
                  console.log("dans home.ts ")
                  console.log(t)
                  this.mesDemandesCompletees.push(["t",
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

                //Load all matches from server
                this.api.loadMatches();

                setTimeout(() => {
                  console.log("toto");
                  this.menu.swipeEnable(true, 'mainMenu');
              }, 50);
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
    this.navCtrl.push(ProfilePage);
  }

  // Go to MessagesPages
  openMessagesPage(){
    this.navCtrl.push(ListeConversationsPage);
  }

  openConversation(id_offre, id_demande){
    //this.api.newDialog(id_offre, id_demande);
    this.navCtrl.push(ConversationPage);
  }

  // AFFICHER DEMANDES
  getName(id_demande) {
    var nom_prenom = this.api.getName({"id_demande":id_demande})
      console.log("dans getName");
      console.log(nom_prenom);
      return nom_prenom;
  }

  getAge(id_demande) {
    var age : any = this.api.getAge({"id_demande":id_demande})
    return age;
  }

  getTypeEmploi(id_demande) {
    var typeEmploi : any = this.api.getTypeEmploi({"id_demande":id_demande})
    //return typeEmploi;
    return "typeEmploi";
  }

  getLocalisation(id_demande) {
    var localisation : any = this.api.getLocalisation({"id_demande":id_demande})
    return localisation;
  }

  getTitre(id_demande) {
    //var titre : any = this.api.getTitre({"id_demande":id_demande})
    //return titre;
    return "titre";
  }

  getQualite(id_demande) {
    var qualite : any = this.api.getQualite({"id_demande":id_demande})
    //return qualite;
    return "qualite";
  }

  getEcole(id_demande) {
    var ecole : any = this.api.getEcole({"id_demande":id_demande})
    //return ecole;
    return "ecole";
  }

  getEcoleDescription(id_demande) {
    var description : any = this.api.getEcoleDescription({"id_demande":id_demande})
    //return description;
    return "description";
  }

  getExperiences(id_demande) {
    var experiences : any = this.api.getExperiences({"id_demande":id_demande})
    //return experiences;
    return "experiences";
  }

  getCompetences(id_demande) {
    var competences : any = this.api.getCompetences({"id_demande":id_demande})
    //return competences;
    return "competences";
  }

  sauvegarder_offres(i){
    var _offre = this.clone(this.main.mesMatchOffres[i]);
    this.main.offresSauvegardees.push(_offre);
  }

  sauvegarder_demandes(i){
    var _demande = this.clone(this.main.mesMatchDemandes[i])
    this.main.demandesSauvegardees.push(_demande);
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
