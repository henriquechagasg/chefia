import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MenuModule } from './menu/menu.module';

@NgModule({
  imports: [CommonModule, SharedModule, AppRoutingModule],
  declarations: [ShopComponent],
  exports: [],
})
export class ShopModule {}
