import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InlineErrorComponent } from './shared/inline-error/inline-error.component';
import { ArcadeComponent } from './pages/arcade/arcade.component';
import { TechLogosComponent } from './shared/tech-logos/tech-logos.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProjectsComponent,
    AboutComponent,
    ErrorComponent,
    FooterComponent,
    InlineErrorComponent,
    ArcadeComponent,
    TechLogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
