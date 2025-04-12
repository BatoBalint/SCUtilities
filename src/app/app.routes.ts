import { Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { LandingPageComponentComponent } from './pages/landing-page-component/landing-page-component.component';
import { AssetsPageComponent } from './pages/assets-page/assets-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'SCUtilities',
    component: LandingPageComponentComponent,
  },
  {
    path: 'assets',
    title: 'Assets',
    component: AssetsPageComponent,
  },
  {
    path: '404',
    title: 'Page not found',
    component: PageNotFoundComponentComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
