import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DisplayComponent, VoterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
