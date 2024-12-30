import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SlideshowComponent } from './pages/slideshow/slideshow.component';
import { SurpriseComponent } from './pages/surprise/surprise.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'slideshow', component: SlideshowComponent },
  { path: 'surprise', component: SurpriseComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
