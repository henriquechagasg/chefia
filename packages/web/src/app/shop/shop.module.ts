import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';
import { MenuModule } from './menu/menu.module';
import { ProductModule } from './product/product.module';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    ProductModule,
    ShopRoutingModule,
  ],
  declarations: [ShopComponent],
  exports: [],
})
export class ShopModule {}
