import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MediumWidgetModule } from 'ngx-medium-widget';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FooterComponent } from './components/footer/footer.component';
import { SimplelinechartComponent } from './components/simplelinechart/simplelinechart.component';
import { SimplebarchartComponent } from './components/simplebarchart/simplebarchart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResumeComponent,
    FooterComponent,
    SimplelinechartComponent,
    SimplebarchartComponent,
    SimplebarchartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    FontAwesomeModule,
    MediumWidgetModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
