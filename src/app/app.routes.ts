import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CardSandboxPageComponent } from './pages/card-sandbox-page/card-sandbox-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'SCUtilities',
    component: LandingPageComponent,
  },
  {
    path: '404',
    title: 'Page not found',
    component: PageNotFoundComponent,
  },
  {
    path: 'cardsandbox',
    title: 'Card testing ground',
    component: CardSandboxPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
