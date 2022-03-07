import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';
import { SmallActionItemComponent } from './small-action-item/small-action-item.component';
import { CheckoutButtonComponent } from './checkout-button/checkout-button.component';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    AddToCartButtonComponent,
    SmallActionItemComponent,
    CheckoutButtonComponent,
    DrawerComponent,
  ],
  exports: [
    AddToCartButtonComponent,
    SmallActionItemComponent,
    CheckoutButtonComponent,
    DrawerComponent,
  ],
})
export class ShopSharedModule {}
