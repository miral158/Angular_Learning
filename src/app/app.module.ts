import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { TransformComponent } from './transform/transform.component';
import { VisibilityComponent } from './visibility/visibility.component';
@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    TransformComponent,
    VisibilityComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
