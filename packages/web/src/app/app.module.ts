import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { OfferCardComponent } from './components/cards/offer-card/offer-card.component';
import { BrazilianRealsPipe } from './pipes/brazilian-reals.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectMenuCategoryComponent } from './components/forms/select-menu-category/select-menu-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OfferCardComponent,
    BrazilianRealsPipe,
    SelectMenuCategoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
