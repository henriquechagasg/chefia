import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ShopSharedModule } from '../shared/shop-shared.module';
import { MenuComponent } from './menu.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { SelectMenuCategoryComponent } from './select-menu-category/select-menu-category.component';

@NgModule({
  imports: [CommonModule, SharedModule, ShopSharedModule],
  declarations: [
    OfferCardComponent,
    SelectMenuCategoryComponent,
    MenuComponent,
  ],
})
export class MenuModule {}
