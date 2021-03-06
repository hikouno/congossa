import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { LinkedIn } from '@ionic-native/linkedin';
import { IonicApp, IonicErrorHandler, IonicModule, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RecherchePage } from '../pages/recherche/recherche';
import { ParametresPage } from '../pages/parametres/parametres';
import { MesDemandesPage } from '../pages/mes-demandes/mes-demandes';
import { MesOffresPage } from '../pages/mes-offres/mes-offres';
import { SauvegardePage } from '../pages/sauvegarde/sauvegarde';
import { ChercheJobPage } from '../pages/cherche-job/cherche-job';
import { ProposeJobPage } from '../pages/propose-job/propose-job';

import { ListEmploi } from '../pages/ListEmploi/ListEmploi';


// Pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { ListeConversationsPage } from '../pages/listeConversations/listeConversations';
import { ConversationPage } from '../pages/conversation/conversation';

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
import { ListCategoriesPage } from "../pages/list-categories/list-categories";
import { MainProvider } from "../providers/main/main";
import { ApiProvider } from "../providers/api/api";

import { ChatService } from '../providers/chat/chat-service';

import { Keyboard } from '@ionic-native/keyboard';

import { MultiPickerModule } from 'ion-multi-picker';
import { CityPickerPage } from "../pages/city-picker/city-picker";

import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';
import { CameraPage } from "../pages/camera/camera";

import { Camera } from '@ionic-native/camera';
import { SlidesPage } from "../pages/slides/slides";

import { IonicStorageModule } from '@ionic/storage';


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

    ListEmploi,

    ParametresPage,
    ProfilePage,
    HomePage,
    FirstPage,
    SubPage,
    RecherchePage,
    MesDemandesPage,
    MesOffresPage,
    SauvegardePage,
    ChercheJobPage,
    ProposeJobPage,
    ResultatRecherchePage,
    ModalViewCardPage,
    ListCategoriesPage,
    CityPickerPage,
    CameraPage,
    SlidesPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    MultiPickerModule,
    GooglePlacesAutocompleteComponentModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListeConversationsPage,
    ConversationPage,

    ListEmploi,

    ParametresPage,
    ProfilePage,
    FirstPage,
    LoginPage,
    SubPage,
    HomePage,
    RecherchePage,
    MesDemandesPage,
    MesOffresPage,
    SauvegardePage,
    ChercheJobPage,
    ProposeJobPage,
    ResultatRecherchePage,
    ModalViewCardPage,
    ListCategoriesPage,
    CityPickerPage,
    CameraPage,
    SlidesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    LinkedIn,
    MainProvider,
    ApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatService,
    Keyboard,
    Camera
  ]
})
export class AppModule {}
