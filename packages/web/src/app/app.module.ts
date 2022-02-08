import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    //Angular
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    //Core
    CoreModule,

    //Shared
    SharedModule,

    //Features
    ShopModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
