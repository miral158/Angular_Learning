import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { TransformComponent } from './transform/transform.component';
import { VisibilityComponent } from './visibility/visibility.component';
import { WebStructureComponent } from './web-structure/web-structure.component';
@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    TransformComponent,
    VisibilityComponent,
    WebStructureComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
