import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Mod3Component } from './mod3.component';

@NgModule({
  declarations: [Mod3Component],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [Mod3Component],
})
export class Mod3Module {}
