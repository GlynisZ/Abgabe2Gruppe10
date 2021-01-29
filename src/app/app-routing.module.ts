// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateComponent } from './layout/create/create.component';
import { MainComponent } from './layout/main/main.component';
import { NgModule } from '@angular/core';

import { SearchComponent } from './layout/search/search.component';

const routes: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
    { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
