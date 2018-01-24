import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { LinkedIn } from '@ionic-native/linkedin';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RecherchePage } from '../pages/recherche/recherche';

import { AjoutOffrePage } from '../pages/AjoutOffrePage/AjoutOffrePage';
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

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

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

    ProfilePage,
    HomePage,
    FirstPage,
    SubPage,
    RecherchePage

  ],
  imports: [
    BrowserModule,
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

    ProfilePage,
    FirstPage,
    LoginPage,
    SubPage,
    HomePage,
    RecherchePage

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
