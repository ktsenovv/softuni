import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './core/error/error.component';

const ROUTE_SHORTCUTS = {
  login: '/auth/login',
  register: '/auth/register',
  signup: '/auth/register',
  profile: '/auth/profile',
} as const;

function createShortcutRoutes(shortcuts: Record<string, string>) {
  return Object.entries(shortcuts).map(([short, full]) => ({
    path: short,
    redirectTo: full,
    pathMatch: 'full' as const,
  }));
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },

  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },

  ...createShortcutRoutes(ROUTE_SHORTCUTS),

  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
