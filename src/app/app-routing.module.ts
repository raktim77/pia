import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SlideshowComponent } from './pages/slideshow/slideshow.component';
import { SurpriseComponent } from './pages/surprise/surprise.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/authguard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    component: LandingPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'slideshow',
    component: SlideshowComponent,
    canActivate: [authGuard],
  },
  { path: 'surprise', component: SurpriseComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
