import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './services/http-error-handler.service';
import {MessageService} from './services/message.service'
import {AuthService} from './auth/services/auth.service'
import { HttpClientModule } from '@angular/common/http';
import {httpInterceptorProviders} from  './http-interceptors'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    AuthService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
