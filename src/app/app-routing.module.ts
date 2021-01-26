import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './layout/main/main.component';
import {SearchComponent} from "./layout/search/search.component";
import {CreateComponent} from "./layout/create/create.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  { path: 'home', component: MainComponent},
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
