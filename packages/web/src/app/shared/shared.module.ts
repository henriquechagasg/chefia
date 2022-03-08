import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BrazilianRealsPipe } from './pipes/brazilian-reals/brazilian-reals.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DrawerButtonComponent } from './components/drawer-button/drawer-button.component';

@NgModule({
  imports: [
    CommonModule,
    //Material
    MaterialModule,
  ],
  declarations: [BrazilianRealsPipe, ToolbarComponent, DrawerButtonComponent],
  exports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    //Material
    MaterialModule,

    //Components
    ToolbarComponent,
    DrawerButtonComponent,

    //Pipes
    BrazilianRealsPipe,
  ],
})
export class SharedModule {}
