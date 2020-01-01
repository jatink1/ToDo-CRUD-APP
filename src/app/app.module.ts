import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { IonicStorageModule } from '@ionic/storage';
import { DoListPage } from '../pages/do-list/do-list';

import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { Data } from '../providers/data/data';
import { NewTaskPage } from '../pages/new-task/new-task';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    DoListPage,
    
    ItemDetailPage,
    NewTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    DoListPage,
    
    ItemDetailPage,
    NewTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]
})
export class AppModule {}
