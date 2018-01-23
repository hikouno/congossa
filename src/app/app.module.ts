import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ProfilPage } from '../pages/profil/profil';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { SubPage } from '../pages/sub/sub';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
<<<<<<< HEAD
    ProfilPage
=======
    HomePage,
    FirstPage,
    SubPage
>>>>>>> 056fb4de1f01ca16679f56e304dfcb352e0edfe3
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    LoginPage,
    ProfilPage
=======
    FirstPage,
    LoginPage,
    SubPage,
    HomePage
>>>>>>> 056fb4de1f01ca16679f56e304dfcb352e0edfe3
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
