import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MainProvider {

  data="init data";

  profile: any;

  // Facebook informations
  gender: string;
  id : string;
  locale :string //language
  is_silhouette: string; //profile picture
  url_photo: string;
  timezone: string; //worldwide localization
  accessToken: string;


  mesOffres: any[] = [];
  mesDemandes: any[] = ["suce","ma","bite"];

  previousView: string;

  currentView: string;


  constructor(public http: HttpClient) {
    console.log('Hello MainProvider Provider');
    if (this.profile == undefined){
      this.profile = {firstname: "",
                      familyname: "",
                      age: "",
                      photo: undefined,
                      dateNaissance: "",
                      email: "",
                      phone: "",
                      shortDescription: "",
                      formations: [],
                      diplomes: [],
                      experiences: [],
                      tableSkills: [],
                      tableQualities: [],
                      qualities: "",
                      skills: ""}
    }
  }


  ////////////////////////////////////////////////////
  //**************** SET AND RETURN ***************//
  //////////////////////////////////////////////////

  set_return_profile(data){
    this.profile = data;
    return this.profile;
  }

  //Facebook informations
  set_return_gender(data){
    this.gender = data;
    return this.gender;
  }

  set_return_id(data){
    this.id = data;
    return this.id;
  }

  set_return_locale(data){
    this.locale = data;
    return this.locale;
  }

  set_return_is_silhouette(data){
    this.is_silhouette = data;
    return this.is_silhouette;
  }

  set_return_url_photo(data){
    this.url_photo = data;
    return this.url_photo;
  }

  set_return_timezone(data){
    this.timezone = data;
    return this.timezone;
  }

  set_return_accessToken(data){
    this.accessToken = data;
    return this.accessToken;
  }





  ////////////////////////////////////////////////////
  //********************* SET *********************//
  //////////////////////////////////////////////////


  set_profile(data){
    this.profile = data;
  }


  //Facebook informations
  set_gender(data){
    this.gender = data;
  }

  set_id(data){
    this.id = data;
  }

  set_locale(data){
    this.locale = data;
  }

  set_is_silhouette(data){
    this.is_silhouette = data;
  }

  set_url_photo(data){
    this.url_photo = data;
  }

  set_timezone(data){
    this.timezone = data;
  }

  set_accessToken(data){
    this.accessToken = data;
  }

  set_currentView(data){
    this.currentView = data;
  }


  ////////////////////////////////////////////////////
  //********************* GET *********************//
  //////////////////////////////////////////////////


  get_profile(){
    return this.profile;
  }


  //Facebook informations
  get_gender(){
    return this.gender;
  }

  get_id(){
    return this.id;
  }

  get_locale(){
    return this.locale ;
  }

  get_is_silhouette(){
    return this.is_silhouette ;
  }

  get_url_photo(){
    return this.url_photo;
  }

  get_timezone(){
    return this.timezone ;
  }

  get_accessToken(){
    return this.accessToken ;
  }

  get_mesOffres(){
    return this.mesOffres;
  }

  get_mesDemandes(){
    return this.mesDemandes;
  }

  get_currentView(){
    return this.currentView;
  }
  ////////////////////////////////////////////////////
  //******************* OTHERS ********************//
  //////////////////////////////////////////////////


  addOffre(data){
    this.mesOffres.push(data);
  }

  addDemande(data){
    this.mesDemandes.push(data);
  }
}
