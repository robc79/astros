import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CraftListComponent } from './craft-list/craft-list.component';
import { PersonListComponent } from './person-list/person-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    CraftListComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink
  ]
})
export class AstrosModule { }
