import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ngModel lives here

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
