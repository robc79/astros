import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraftListComponent } from './astros/craft-list/craft-list.component';
import { PersonListComponent } from './astros/person-list/person-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'craft', component: CraftListComponent },
  { path: 'astros/:craft', component: PersonListComponent },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/craft', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
