import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CraftListComponent } from './craft-list/craft-list.component';
import { PersonListComponent } from './person-list/person-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    CraftListComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    MatListModule
  ]
})
export class AstrosModule { }
