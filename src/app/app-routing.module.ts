import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OsComponent} from './os/os.component';
import { ProgLangComponent } from './prog-lang/prog-lang.component';
import { DatabaseComponent } from './database/database.component';
import { NeverComponent } from './never/never.component';

const routes: Routes = 
[
  {path : '',component:NeverComponent},
  {path : 'os', component:OsComponent},
  {path : 'prog-lang' ,component:ProgLangComponent},
  {path : 'database' ,component:DatabaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
