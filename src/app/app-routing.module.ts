import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './shared/constants/routes.constants';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: ROUTES.home.path, pathMatch: 'full' },
  { path: ROUTES.home.name, component: AboutComponent },
  { path: ROUTES.about.name, component: AboutComponent },
  { path: ROUTES.projects.name, component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
