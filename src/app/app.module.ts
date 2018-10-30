import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Screenshot } from '@ionic-native/screenshot';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { CallOutPage } from '../pages/call-out/call-out';
import { HttpClientModule } from '@angular/common/http';
import { CallInPage } from '../pages/call-in/call-in';
import { IonicStorageModule } from '@ionic/storage';
import { UserProvider } from '../providers/user/user';
import { LoginComponent } from '../components/login/login';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    CallOutPage,
    CallInPage,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{mode: 'md'}),
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'ntt',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    CallOutPage,
    CallInPage,
    LoginComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    Screenshot
  ]
})
export class AppModule {}
