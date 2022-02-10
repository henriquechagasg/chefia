import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop.component';

const shopRoutes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      { path: '', component: MenuComponent },
      { path: ':item', component: ProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(shopRoutes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
