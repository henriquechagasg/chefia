import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';
import { SmallActionItemComponent } from './small-action-item/small-action-item.component';
import { CheckoutButtonComponent } from './checkout-button/checkout-button.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    AddToCartButtonComponent,
    SmallActionItemComponent,
    CheckoutButtonComponent,
  ],
  exports: [
    AddToCartButtonComponent,
    SmallActionItemComponent,
    CheckoutButtonComponent,
  ],
})
export class ShopSharedModule {}
