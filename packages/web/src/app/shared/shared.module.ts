import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';
import { BrazilianRealsPipe } from './pipes/brazilian-reals/brazilian-reals.pipe';
import { SmallActionItemComponent } from './small-action-item/small-action-item.component';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    MaterialModule,
  ],
  declarations: [
    SmallActionItemComponent,
    AddToCartButtonComponent,
    BrazilianRealsPipe,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    MaterialModule,

    //Components
    SmallActionItemComponent,
    AddToCartButtonComponent,

    //Pipes
    BrazilianRealsPipe,
  ],
})
export class SharedModule {}
