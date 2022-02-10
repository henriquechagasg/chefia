import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ProductComponent],
})
export class ProductModule {}
