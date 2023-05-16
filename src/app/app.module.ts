import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import { UserCardComponent } from './user-card/user-card.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserCardComponent,
    FooterComponent,
    ContentComponent,
    GridListComponent,
    PageHeadingComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
