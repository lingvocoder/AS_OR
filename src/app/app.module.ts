import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import { UserCardComponent } from './user-card/user-card.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { UserPageComponent } from './user-page/user-page.component';
import { StatsComponent } from './stats/stats.component';
import {LOCALE_ID} from "@angular/core";
import localeRu from '@angular/common/locales/ru';
import { InputGroupComponent } from './input-group/input-group.component';
import { TableComponent } from './table/table.component';

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
    TableComponent
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
