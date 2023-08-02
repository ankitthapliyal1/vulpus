import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NextDirective } from './shared/components/diractive/next.directive';
import { PrevDirective } from './shared/components/diractive/prev.directive';
import { GamesComponent } from './pages/games/games.component';
import { CommunityComponent } from './pages/community/community.component';
import { StoreComponent } from './pages/store/store.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NextDirective,
    PrevDirective,
    GamesComponent,
    CommunityComponent,
    StoreComponent,
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
         NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
