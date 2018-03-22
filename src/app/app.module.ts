import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommandListComponent } from './components/command-list/command-list.component';
import { DataService } from './services/data.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { CommandFormComponent } from './components/command-form/command-form.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAfQYpSeeC27ZJuAHIRtBdbCN63Zvfr9SE",
  authDomain: "profilometer-cc55d.firebaseapp.com",
  databaseURL: "https://profilometer-cc55d.firebaseio.com",
  projectId: "profilometer-cc55d",
  storageBucket: "profilometer-cc55d.appspot.com",
  messagingSenderId: "538361946410"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommandListComponent,
    CommandFormComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [DataService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
