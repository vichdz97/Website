import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LucideAngularModule, Mail, Github, Linkedin, Facebook, House, Code, Joystick, UserRound, FileText, Cog, Globe } from 'lucide-angular';

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
import { IntroComponent } from './pages/home/intro/intro.component';
import { AboutMeComponent } from './pages/home/about-me/about-me.component';
import { MySkillsComponent } from './pages/home/my-skills/my-skills.component';
import { MyProjectsComponent } from './pages/home/my-projects/my-projects.component';
import { MyArcadeComponent } from './pages/home/my-arcade/my-arcade.component';
import { ContactMeComponent } from './pages/home/contact-me/contact-me.component';



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
    TechLogosComponent,
    IntroComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    MyArcadeComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    LucideAngularModule.pick({Mail, Github, Linkedin, Facebook, House, Code, Joystick, UserRound, FileText, Cog, Globe})
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
