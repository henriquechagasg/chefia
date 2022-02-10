import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';
import { MenuModule } from './menu/menu.module';
import { ProductModule } from './product/product.module';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopSharedModule } from './shared/shop-shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopSharedModule,
    ShopRoutingModule,
    MenuModule,
    ProductModule,
  ],
  declarations: [ShopComponent],
  exports: [],
})
export class ShopModule {}
