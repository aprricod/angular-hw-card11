import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Mod1Component } from './mod1.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [Mod1Component, SearchPipe],
  imports: [CommonModule, FormsModule, HttpClientModule, Ng2SearchPipeModule],
  exports: [Mod1Component],
})
export class Mod1Module {}
