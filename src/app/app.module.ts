import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GlitchyTextComponent } from './glitchy-text/glitchy-text.component';


@NgModule({
  declarations: [
    AppComponent,
    GlitchyTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
