import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JobsFairComponent } from './jobs-fair/jobs-fair.component';
import { WebrexComponent } from './webrex/webrex.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'services', 
    component: ServicesComponent
  },
  {
    path: 'aboutus',
    component:AboutusComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'jobs-fair',
    component:JobsFairComponent
  },
  {
    path:'webrex',
    component:WebrexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }