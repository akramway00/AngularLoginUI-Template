import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { InputComponentComponent } from './components/input-component/input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    InputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
