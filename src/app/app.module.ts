import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import{FormsModule} from '@angular/forms'
import{AngularFireModule} from '@angular/fire';
import {environment} from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
