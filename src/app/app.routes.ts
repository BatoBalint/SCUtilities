import { Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { LandingPageComponentComponent } from './pages/landing-page-component/landing-page-component.component';

export const routes: Routes = [
  {
    path: '',
    title: 'SCUtilities',
    component: LandingPageComponentComponent
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
