import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubPage } from "../sub/sub";

/**
 * Generated class for the SlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  slides = [
   {
     title: "Bienvenue dans Congossa !",
     description: "<b>Congossa</b> est une application de <b>mise en relation</b> entre personnes <b>proposant un emploi</b> et personnes <b>à la recherche d'un emploi</b>.",
     image: "assets/imgs/hand.jpeg",
   },
   {
     title: "Comment ça marche ?",
     description: "<b>C'est facile</b>, déposez une annonce de recherche de Job ou de proposition de Job et vous pourrez consulter les offres ou demandes correspondant à votre annonce.",
     image: "assets/imgs/interrogation.jpeg",
   },
   {
     title: "On s'occupe de tout !",
     description: "Si vous êtes proche d'une personne correspondant à votre recherche, vous recevrez une notification pour vous en informer et ainsi favoriser la rencontre entre votre futur employeur ou votre future recrue",
     image: "assets/imgs/idea.jpeg",
   }
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

  goToSub(){
    this.navCtrl.push(SubPage);
  }

}
