import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';
import {NavbarComponent} from './components/navbar/navbar.component';
//import { MnFullpageDirective } from 'ng2-fullpage';
//import {MnFullpageService} from 'ng2-fullpage';

import { AppComponent }  from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';



@NgModule({
  imports:      [ BrowserModule,HttpModule, routing ],
  declarations: [ AppComponent, ResumeComponent, AboutComponent, HomeComponent, NavbarComponent
//    MnFullpageDirective
  ],
  bootstrap:    [ AppComponent ]
//  providers: [MnFullpageService]
})
export class AppModule { }
