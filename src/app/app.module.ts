import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SlideshowComponent } from './pages/slideshow/slideshow.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SurpriseComponent } from './pages/surprise/surprise.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ImagesComponent } from './components/images/images.component';
import { MaterialModule } from './modules/material.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SlideshowComponent,
    SurpriseComponent,
    SafeUrlPipe,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
