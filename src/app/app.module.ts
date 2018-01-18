import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { GlitchyTextComponent } from "./glitchy-text/glitchy-text.component";
import { RadLoaderComponent } from "./rad-loader/rad-loader.component";
import { GlitchyPictureComponent } from "./glitchy-picture/glitchy-picture.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { TinkeringComponent } from "./tinkering/tinkering.component";
import { GlitchMediatorService } from "./glitch-mediator.service";

@NgModule({
	declarations: [
		AppComponent,
		GlitchyTextComponent,
		RadLoaderComponent,
		GlitchyPictureComponent,
		HomeComponent,
		ContactComponent,
		TinkeringComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES)
	],
	providers: [
		GlitchMediatorService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
