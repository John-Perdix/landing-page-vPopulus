import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { PatchnotesComponent } from './patchnotes/patchnotes.component';
import { StatisticsComponent } from './statistics/statistics.component';







@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    PatchnotesComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
