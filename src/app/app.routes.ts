import { Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { LandingPageComponentComponent } from './pages/landing-page-component/landing-page-component.component';
import { CardSandboxPageComponent } from './pages/card-sandbox-page/card-sandbox-page.component';

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
