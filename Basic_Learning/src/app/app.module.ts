import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TemplatedrivenFromComponent } from './templatedriven-from/templatedriven-from.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplatedrivenFromComponent,
    ReactiveFormComponent,
    SignUpComponent,
    MarksheetComponent,
    ContentProjectionComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
