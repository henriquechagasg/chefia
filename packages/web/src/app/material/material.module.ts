import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [
  MatSidenavModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatRippleModule,
  MatBadgeModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
];

@NgModule({
  exports: [MaterialComponents],
})
export class MaterialModule {}
