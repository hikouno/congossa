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

  finExperience: string;
  finExperienceCopy: string;

  debutExperience: string;
  debutExperienceCopy: string;

  qualities: string;
  qualitiesCopy: string;

  skills: string;
  skillsCopy: string;

  phone: string;
  phoneCopy: string;

  email: string;
  emailCopy: string;

  date: string;
  dateCopy: string;

  familynameCopy: string;
  firstnameCopy: string;

  firstname: string;
  familyname: string;

  age: number;
  ageCopy: number;

  shortDescription: string;
  shortDescriptionCopy: string;

  photo: any;
  photoCopy: any;

  // Facebook informations
  gender: string;
  id : string;
  locale :string //language
  is_silhouette: string; //profile picture
  url_photo: string;
  timezone: string; //worldwide localization
  accessToken: string;



  tableSkills: any;
  tableSkillsCopy: any;

  tableQualities: any;
  tableQualitiesCopy: any;

  formations: Array<{title:string, formation:string}>;
  formationsCopy: Array<{title:string, formation:string}>;

  diplomes: Array<{title:string, diplome:string}>;
  diplomesCopy: Array<{title:string, diplome:string}>;

  experiences: Array<{title:string, experience:string, dateDebut:string, dateFin:string, period:string}>;
  experiencesCopy: Array<{title:string, experience:string, dateDebut:string, dateFin:string, period:string}>;


  mesOffres: any[] = [];
  mesDemandes: any[] = [];


  constructor(public http: HttpClient) {
    console.log('Hello MainProvider Provider');
    if (this.profile == undefined){
      this.profile = {firstname: "",
                      familyname: "",
                      age: undefined,
                      photo: undefined,
                      date: undefined,
                      email: "",
                      phone: "",
                      shortDescription: "",
                      formations: undefined,
                      diplomes: undefined,
                      experiences: undefined,
                      tableSkills: undefined,
                      tableQualities: undefined,
                      qualities: "",
                      skills: "",
                      finExperience: undefined,
                      debutExperience: undefined}
    }
  }


  ////////////////////////////////////////////////////
  //**************** SET AND RETURN ***************//
  //////////////////////////////////////////////////

  set_return_profile(data){
    this.profile = data;
    return this.profile;
  }

  set_return_finExperience(data){
    this.finExperience = data;
    return this.finExperience;
  }

  set_return_debutExperience(data){
    this.debutExperience = data;
    return this.debutExperience;
  }

  set_return_qualities(data){
    this.qualities = data;
    return this.qualities;
  }

  set_return_skills(data){
    this.skills = data;
    return this.skills;
  }

  set_return_phone(data){
    this.phone = data;
    return this.phone;
  }

  set_return_email(data){
    this.email = data;
    return this.email;
  }

  set_return_date(data){
    this.date = data;
    return this.date;
  }

  set_return_familyname(data){
    this.familyname = data;
    return this.familyname;
  }

  set_return_firstname(data){
    this.firstname = data;
    return this.firstname;
  }

  set_return_age(data){
    this.age = data;
    return this.age;
  }

  set_return_shortDescription(data){
    this.shortDescription = data;
    return this.shortDescription;
  }

  set_return_photo(data){
    this.photo = data;
    return this.photo;
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



  set_return_tableSkills(data){
    this.tableSkills = data;
    return this.tableSkills;
  }

  set_return_tableQualities(data){
    this.tableQualities = data;
    return this.tableQualities;
  }

  set_return_formations(data){
    this.formations = data;
    return this.formations;
  }

  set_return_diplomes(data){
    this.diplomes = data;
    return this.diplomes;
  }

  set_return_experiences(data){
    this.experiences = data;
    return this.experiences;
  }



  ////////////////////////////////////////////////////
  //********************* SET *********************//
  //////////////////////////////////////////////////


  set_profile(data){
    this.profile = data;
  }

  set_finExperience(data){
    this.finExperience = data;
  }

  set_debutExperience(data){
    this.debutExperience = data;
  }

  set_qualities(data){
    this.qualities = data;
  }

  set_skills(data){
    this.skills = data;
  }

  set_phone(data){
    this.phone = data;
  }

  set_email(data){
    this.email = data;
  }

  set_date(data){
    this.date = data;
  }

  set_familyname(data){
    this.familyname = data;
  }

  set_firstname(data){
    this.firstname = data;
  }

  set_age(data){
    this.age = data;
  }

  set_shortDescription(data){
    this.shortDescription = data;
  }

  set_photo(data){
    this.photo = data;
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




  set_tableSkills(data){
    this.tableSkills = data;
  }

  set_tableQualities(data){
    this.tableQualities = data;
  }

  set_formations(data){
    this.formations = data;
  }

  set_diplomes(data){
    this.diplomes = data;
  }

  set_experiences(data){
    this.experiences = data;
  }


  ////////////////////////////////////////////////////
  //********************* GET *********************//
  //////////////////////////////////////////////////


  get_profile(){
    return this.profile;
  }

  get_finExperience(){
    return this.finExperience;
  }

  get_debutExperience(){
    return this.debutExperience;
  }

  get_qualities(){
    return this.qualities;
  }

  get_skills(){
    return this.skills;
  }

  get_phone(){
    return this.phone;
  }

  get_email(){
    return this.email;
  }

  get_date(){
    return this.date;
  }

  get_familyname(){
    return this.familyname;
  }

  get_firstname(){
    return this.firstname;
  }

  get_age(){
    return this.age;
  }

  get_shortDescription(){
    return this.shortDescription;
  }

  get_photo(){
    return this.photo;
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



  get_tableSkills(){
    return this.tableSkills;
  }

  get_tableQualities(){
    return this.tableQualities;
  }

  get_formations(){
    return this.formations;
  }

  get_diplomes(){
    return this.diplomes;
  }

  get_experiences(){
    return this.experiences;
  }

  get_mesOffres(){
    return this.mesOffres;
  }

  get_mesDemandes(){
    return this.mesDemandes;
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
