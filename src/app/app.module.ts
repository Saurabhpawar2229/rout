import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsComponent } from './os/os.component';
import { ProgLangComponent } from './prog-lang/prog-lang.component';
import { DatabaseComponent } from './database/database.component';
import { NeverComponent } from './never/never.component';

@NgModule({
  declarations: [
    AppComponent,
    OsComponent,
    ProgLangComponent,
    DatabaseComponent,
    NeverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
