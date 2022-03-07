import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BrazilianRealsPipe } from './pipes/brazilian-reals/brazilian-reals.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    //Material
    MaterialModule,
  ],
  declarations: [BrazilianRealsPipe, ToolbarComponent],
  exports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    //Material
    MaterialModule,

    //Components
    ToolbarComponent,

    //Pipes
    BrazilianRealsPipe,
  ],
})
export class SharedModule {}
