import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WebrexComponent } from './webrex/webrex.component';
import { TabdetailComponent } from './tabdetail/tabdetail.component';
import { PortfoliocardsComponent } from './portfoliocards/portfoliocards.component';
import { JobsFairComponent } from './jobs-fair/jobs-fair.component';
import{SignUpComponent} from '../../../Basic_Learning/src/app/sign-up/sign-up.component'
@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    AboutusComponent,
    ServicesComponent,
    HomeComponent,
    WebrexComponent,
    TabdetailComponent,
    PortfoliocardsComponent,
    JobsFairComponent,
    SignUpComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
