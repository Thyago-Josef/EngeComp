import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseboardComponent } from './baseboard/baseboard.component';
import { SlideComponent } from './slide/slide.component';
import { QuimicaComponent } from './quimica/quimica.component';
import { ArtigosComponent } from './artigos/artigos.component';
import { ArtigosPageComponent } from './artigos-page/artigos-page.component';
import { QuimicaDetailsComponent } from './quimica-details/quimica-details.component';
import { FisicaComponent } from './fisica/fisica.component';
import { FisicaDetailsComponent } from './fisica-details/fisica-details.component';
import { MatematicaComponent } from './matematica/matematica.component';
import { MatematicaDetailsComponent } from './matematica-details/matematica-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BaseboardComponent,
    SlideComponent,
    QuimicaComponent,
    ArtigosComponent,
    ArtigosPageComponent,
    QuimicaDetailsComponent,
    FisicaComponent,
    FisicaDetailsComponent,
    MatematicaComponent,
    MatematicaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
