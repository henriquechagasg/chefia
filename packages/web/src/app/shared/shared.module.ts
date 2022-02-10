import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BrazilianRealsPipe } from './pipes/brazilian-reals/brazilian-reals.pipe';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    MaterialModule,
  ],
  declarations: [BrazilianRealsPipe],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    MaterialModule,

    //Pipes
    BrazilianRealsPipe,
  ],
})
export class SharedModule {}
