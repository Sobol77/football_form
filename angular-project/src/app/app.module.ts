import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KlubyComponent } from './kluby/kluby.component';
import { KlubDetailComponent } from './klub-detail/klub-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KlubyComponent,
    KlubDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
