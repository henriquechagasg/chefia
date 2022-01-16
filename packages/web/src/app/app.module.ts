import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { MainContentWrapperComponent } from './components/main-content-wrapper/main-content-wrapper.component';
import { OfferCardComponent } from './components/cards/offer-card/offer-card.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, MainContentWrapperComponent, OfferCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
