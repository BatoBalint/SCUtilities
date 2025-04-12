import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AssetsPageComponent } from './pages/assets-page/assets-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'SCUtilities',
    component: LandingPageComponent
  },
  {
    path: 'assets',
    title: 'Assets',
    component: AssetsPageComponent,
  },
  {
    path: '404',
    title: 'Page not found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
