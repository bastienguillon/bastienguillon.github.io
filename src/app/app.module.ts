import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GlitchyTextComponent } from "./glitchy-text/glitchy-text.component";
import { RadLoaderComponent } from "./rad-loader/rad-loader.component";

@NgModule({
	declarations: [
		AppComponent,
		GlitchyTextComponent,
		RadLoaderComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
