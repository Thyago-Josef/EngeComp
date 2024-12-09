import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuimicaComponent } from './quimica/quimica.component';
import { HomeComponent } from './home/home.component';
import { QuimicaDetailsComponent } from './quimica-details/quimica-details.component';
import { FisicaComponent } from './fisica/fisica.component';
import { FisicaDetailsComponent } from './fisica-details/fisica-details.component';
import { MatematicaComponent } from './matematica/matematica.component';
import { MatematicaDetailsComponent } from './matematica-details/matematica-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quimica', component: QuimicaComponent },
  { path: 'quimica/:id', component: QuimicaDetailsComponent },
  { path: 'fisica', component: FisicaComponent },
  { path: 'fisica/:id', component: FisicaDetailsComponent },
  { path: 'matematica', component: MatematicaComponent },
  { path: 'matematica/:id', component: MatematicaDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
