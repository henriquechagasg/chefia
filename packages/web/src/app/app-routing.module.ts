import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './shop/menu/menu.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: 'menu',
    component: ShopComponent,
    children: [{ path: '', component: MenuComponent, outlet: 'shop' }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
