import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { LinkedIn } from '@ionic-native/linkedin';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RecherchePage } from '../pages/recherche/recherche';
import { ParametresPage } from '../pages/parametres/parametres';
import { MesDemandesPage } from '../pages/mes-demandes/mes-demandes';
import { MesOffresPage } from '../pages/mes-offres/mes-offres';
import { SauvegardePage } from '../pages/sauvegarde/sauvegarde';
import { StatistiquesPage } from '../pages/statistiques/statistiques';
import { AboutPage } from '../pages/about/about';
import { ChercheJobPage } from '../pages/cherche-job/cherche-job';
import { ProposeJobPage } from '../pages/propose-job/propose-job';

import { AjoutOffrePage } from '../pages/AjoutOffrePage/AjoutOffrePage';
import { ListEmploi } from '../pages/ListEmploi/ListEmploi';


// Pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { ListeConversationsPage } from '../pages/listeConversations/listeConversations';
import { ConversationPage } from '../pages/conversation/conversation';

import { EditProfilePage } from '../pages/editProfile/editProfile';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { SubPage } from '../pages/sub/sub';

import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ResultatRecherchePage } from "../pages/resultat-recherche/resultat-recherche";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalViewCardPage } from "../pages/modal-view-card/modal-view-card";

var config = {
    apiKey: "AIzaSyDP3fwr3INchk7uHfW9B8_Em3ow0J3WuMo",
    authDomain: "congossa-a0553.firebaseapp.com",
    databaseURL: "https://congossa-a0553.firebaseio.com",
    projectId: "congossa-a0553",
    storageBucket: "congossa-a0553.appspot.com",
    messagingSenderId: "196706457181"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginPage,

    ListeConversationsPage,
    ConversationPage,

    AjoutOffrePage,
    ListEmploi,

    ParametresPage,
    EditProfilePage,
    ProfilePage,
    HomePage,
    FirstPage,
    SubPage,
    RecherchePage,
    MesDemandesPage,
    MesOffresPage,
    SauvegardePage,
    StatistiquesPage,
    AboutPage,
    ChercheJobPage,
    ProposeJobPage,
    ResultatRecherchePage,
    ModalViewCardPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListeConversationsPage,
    ConversationPage,

    AjoutOffrePage,
    ListEmploi,

    ParametresPage,
    EditProfilePage,
    ProfilePage,
    FirstPage,
    LoginPage,
    SubPage,
    HomePage,
    RecherchePage,
    MesDemandesPage,
    MesOffresPage,
    SauvegardePage,
    StatistiquesPage,
    AboutPage,
    ChercheJobPage,
    ProposeJobPage,
    ResultatRecherchePage,
    ModalViewCardPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    LinkedIn,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
