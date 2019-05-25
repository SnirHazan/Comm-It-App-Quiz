import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionsPagingComponent } from './questions-paging/questions-paging.component';
import { SummaryComponent } from './summary/summary.component';
import {HttpClientModule} from '@angular/common/http';
import {QuestionService} from './question.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule, MatRadioModule} from '@angular/material';
import { WelcomeComponent } from './welcome/welcome.component';
import {UserDataService} from './user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    QuestionsPagingComponent,
    SummaryComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  providers: [QuestionService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
