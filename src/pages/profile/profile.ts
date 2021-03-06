import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, MenuController, ToastController, Platform, ActionSheetController} from 'ionic-angular';

//pages
import { ModalViewCardPage } from "../modal-view-card/modal-view-card";
import { ListeConversationsPage } from "../listeConversations/listeConversations";
import { RecherchePage } from "../recherche/recherche";

import {MainProvider} from "../../providers/main/main";
import { ApiProvider } from "../../providers/api/api";
import { ListCategoriesPage } from "../list-categories/list-categories";
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  onlineMode: boolean = false;

  profile: any;

  durations_formations : any;

  durations_experiences: any;

  options:any;

  public base64Image: string;


  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              public modalCtrl: ModalController,
              private provider:MainProvider,
              private apiProvider: ApiProvider,
              private alertCtrl: AlertController,
              public menu: MenuController,
              public toastCtrl: ToastController,
              public actionsheetCtrl: ActionSheetController,
              public platform: Platform,
              private camera: Camera) {
    this.provider.currentView = 'ProfilePage';
	  this.getAll();

    this.durations_formations = [
    {
      name: 'col1',
      options: [
        { text: '3 mois', value: '0.25'},
        { text: '6 mois', value: '0.5'},
        { text: '1 an', value: '1'},
        { text: '2 ans', value: '2'},
        { text: '3 ans', value: '3'},
        { text: '4 ans', value: '4'},
        { text: '5 ans', value: '5'},
        { text: '6 ans', value: '6'},
        { text: '7 ans', value: '7'},
        { text: '8 ans', value: '8'},
        { text: '9 ans', value: '9'},
        { text: '10 ans', value: '10'},
        { text: '11 ans', value: '11'}
      ]
    }
  ];

  this.durations_experiences = [
  {
    name: 'col2',
    options: [
      { text: '3 mois', value: '0.25'},
      { text: '6 mois', value: '0.5'},
      { text: '1 an', value: '1'},
      { text: '2 ans', value: '2'},
      { text: '3 ans', value: '3'},
      { text: '4 ans', value: '4'},
      { text: '5 ans', value: '5'},
      { text: '6 ans', value: '6'},
      { text: '7 ans', value: '7'},
      { text: '8 ans', value: '8'},
      { text: '9 ans', value: '9'},
      { text: '10 ans', value: '10'},
      { text: 'Plus de 10 ans', value: '11'}
    ]
  }
];
  }


  ionViewWillLeave() {
    console.log("tutu");
    this.menu.swipeEnable(true, 'mainMenu');
  }

  sendPrename() {
    this.apiProvider.changePrenom({"newPrenom":this.profile.firstname})
  }
  sendName() {
    this.apiProvider.changeNom({"newNom":this.profile.familyname})
  }
  sendSexe() {
    this.apiProvider.changeSexe({"newSexe":this.profile.sexe})
  }
  sendEmail(){
      this.apiProvider.changeEmail({"newEmail":this.profile.email})
  }
  sendDateDeNaissance(){
    this.apiProvider.changeDateDeNaissance({"newDateDeNaissance":this.profile.dateNaissance})
  }

  sendTelephone(){
    this.apiProvider.changeTelephone({"newTelephone":this.profile.phone})
  }

  sendDescription(){
    this.apiProvider.changeDescription({"newDescription":this.profile.shortDescription})
  }

  sendQualite(){
    this.organizeQualities()
    this.apiProvider.changeQualite({"newQualites":this.profile.tableQualities})
  }
  sendCompetence(){
    this.organizeSkills()
    this.apiProvider.changeCompetence({"newCompetences":this.profile.tableSkills})
  }

//
  addFormation(){

    if (this.profile.formations == undefined){

      this.profile.formations = [];
      this.profile.formations.push({title: "newFormation", formation: "", domaine: "Domaine", period: undefined});

    } else if (this.profile.formations.length == 0){
    this.profile.formations.push({title: "newFormation1", formation: "", domaine: "Domaine", period: undefined});
    }

    if (this.profile.formations[this.profile.formations.length - 1].formation != ""){
      this.profile.formations.push({title: "newFormation1", formation:"", domaine: "Domaine", period: undefined});
    }
  }

  addExperience(){
    if (this.profile.experiences == undefined){
      this.profile.experiences = [];
      this.profile.experiences.push({title: "newExperience", experience: "", period: "", domaine: "Domaine"});
    } else if (this.profile.experiences.length == 0){
    this.profile.experiences.push({title: "newExperience", experience: "", period: "", domaine: "Domaine"});
    }
    if (this.profile.experiences[this.profile.experiences.length - 1].experience != ""){
      this.profile.experiences.push({title: "newExperience1", experience:"", period: "", domaine: "Domaine"});
    }
  }


  removeFormation(i){
    this.profile.formations.splice(i, 1);
  }

  removeExperience(i){
    this.profile.experiences.splice(i, 1);
  }

  showCategories_formation(i){
    var myCallbackFunction_categories_formation = (_params) => {
      return new Promise((resolve, reject) => {
              resolve();
              this.profile.formations[i].domaine=_params;
          });
   }
   console.log(this.profile.formations[i].domaine);
    this.navCtrl.push(ListCategoriesPage, {callback: myCallbackFunction_categories_formation});
  }

  showCategories_experience(i){
    var myCallbackFunction_categories_experience = (_params) => {
      return new Promise((resolve, reject) => {
              resolve();
              this.profile.experiences[i].domaine=_params;
          });
   }
   console.log(this.profile.experiences[i].domaine);
    this.navCtrl.push(ListCategoriesPage, {callback: myCallbackFunction_categories_experience});
  }


  displayCard(){
    if (!this.onlineMode) {
      this.calculateAge();
      this.organizeSkills();
      this.organizeQualities();
      let viewCardModal = this.modalCtrl.create(ModalViewCardPage, {firstname: this.profile.firstname,
        familyname: this.profile.familyname,
        age: this.profile.age,
        shortDescription: this.profile.shortDescription,
        photo: this.profile.photo,
        tableSkills: this.profile.tableSkills,
        tableQualities: this.profile.tableQualities,
        formations: this.profile.formations,
        diplomes: this.profile.diplomes,
        experiences: this.profile.experiences
      });
      viewCardModal.present();
    } else {
      // http request
    }
  }

  calculateAge(){
    var currentDate = new Date();
    console.log(this.profile.age);

    var dd = currentDate.getDate();
    var mm = Number(currentDate.getMonth()+1); //January is 0!
    var yyyy = Number(currentDate.getFullYear());

    if (this.profile.dateNaissance != undefined){
      var tableauDate = this.profile.dateNaissance.split("-");

      if (mm < Number(tableauDate[1])){
        this.profile.age = yyyy - Number(tableauDate[0]) - 1;
      }
      else {
        this.profile.age = yyyy - Number(tableauDate[0]);
      }
    }
  }


  organizeSkills(){
    if (this.profile.skills != ""){
      this.profile.tableSkills = this.profile.skills.split(",");
      for (var i=0; i<this.profile.tableSkills.length; i++){
        if (this.profile.tableSkills[i].charAt(0) != " "){
          this.profile.tableSkills[i] = " " + this.profile.tableSkills[i];
        }
      }
    }
  }

  organizeQualities(){
    if (this.profile.qualities != ""){
      this.profile.tableQualities = this.profile.qualities.split(",");
      for (var i=0; i<this.profile.tableQualities.length; i++){
        if (this.profile.tableQualities[i].charAt(0) != " "){
          this.profile.tableQualities[i] = " " + this.profile.tableQualities[i];
        }
      }
    }
  }

  clone(obj){
    if (obj != undefined){
      try{
          var copy = JSON.parse(JSON.stringify(obj));
      } catch(ex){
          alert("CLONE ERROR");
      }
    }
    return copy;
    }

  presentConfirm_formation(i) {
    let alert = this.alertCtrl.create({
      title: 'Supprimer cette formation ?',
      message: 'Souhaitez vous supprimer cette formation ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            this.removeFormation(i);
          }
        }
      ]
    });
    alert.present();
  }


  presentConfirm_experience(i) {
    let alert = this.alertCtrl.create({
      title: 'Supprimer cette expérience ?',
      message: 'Souhaitez vous supprimer cette expérience ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            this.removeExperience(i);
          }
        }
      ]
    });
    alert.present();
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Veuillez compléter votre Prénom, Nom et Date de Naissance',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Modifier la photo de profil',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Prendre une photo',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            this.takePhoto(1);
          }
        },
        {
          text: 'Depuis la bibliothèque',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            this.takePhoto(0);
          }
        },
        {
          text: 'Annuler',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  takePhoto(sourceType:number) {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: true,
      sourceType:sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.profile.photo = this.base64Image;
      this.apiProvider.sendPicture({"newAvatar":this.profile.photo})
    }, (err) => {
      // Handle error
    });
  }


  removeUselessVariables(){
    for (var i=0; i<this.profile.experiences.length; i++){
      if (this.profile.experiences[i].experience == ""){
        this.profile.experiences.splice(i,1);
      }
    }
    for (var i=0; i<this.profile.formations.length; i++){
      if (this.profile.formations[i].formation == ""){
        this.profile.formations.splice(i,1);
      }
    }
  }

  enregistrer(){
    if (this.profile.firstname == "" ||
        this.profile.lastname == "" ||
        this.profile.dateNaissance == ""){
          this.showToastWithCloseButton();
        }
    else {
      this.removeUselessVariables();
      this.calculateAge();
      this.organizeSkills();
      this.organizeQualities();
      this.navCtrl.setRoot(RecherchePage);
      console.log(this.profile.experiences);
      this.apiProvider.changeExperienceFormation({"newExperience":this.profile.experiences,"newFormation":this.profile.formations})
    }
  }


  getAll() {
    // Local mode
    if (!this.onlineMode) {

      this.profile = this.provider.get_profile();


      /*this.tableSkillsCopy = this.navParams.get('tableSkills');
      this.shortDescriptionCopy = this.navParams.get('shortDescription');
      this.experiencesCopy = this.navParams.get('experiences');*/
    } else {
      // Remote mode
      // http request
    }
  }

}
