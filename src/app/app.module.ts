import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import { UserCardComponent } from './components/user-card/user-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { StatsComponent } from './components/stats/stats.component';
import {LOCALE_ID} from "@angular/core";
import localeRu from '@angular/common/locales/ru';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserCardComponent,
    FooterComponent,
    ContentComponent,
    GridListComponent,
    PageHeadingComponent,
    UserPageComponent,
    StatsComponent,
    InputGroupComponent,
    TableComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'ru'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
