import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandeCreateComponent } from './commandes/commande-create/commande-create.component';
import { CommandeListComponent } from './commandes/commande-list/commande-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CommandesComponent,
    CommandeCreateComponent,
    CommandeListComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
