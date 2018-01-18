import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GlitchyTextComponent } from "./glitchy-text/glitchy-text.component";
import { RadLoaderComponent } from "./rad-loader/rad-loader.component";
import { GlitchyPictureComponent } from './glitchy-picture/glitchy-picture.component';

@NgModule({
	declarations: [
		AppComponent,
		GlitchyTextComponent,
		RadLoaderComponent,
		GlitchyPictureComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
