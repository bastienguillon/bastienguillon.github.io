import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClient, HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { ROUTES } from "./app.routes";

import { AppComponent } from "./app.component";
import { GlitchyTextComponent } from "./glitchy-text/glitchy-text.component";
import { RadLoaderComponent } from "./rad-loader/rad-loader.component";
import { GlitchyPictureComponent } from "./glitchy-picture/glitchy-picture.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { TinkeringComponent } from "./tinkering/tinkering.component";
import { GlitchMediatorService } from "./glitch-mediator.service";
import { LocalStorageService } from "./local-storage.service";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { FooterComponent } from "./footer/footer.component";

export function HttpLoaderFactory(http: HttpClient) { return new TranslateHttpLoader(http); }

@NgModule({
	declarations: [
		AppComponent,
		GlitchyTextComponent,
		RadLoaderComponent,
		GlitchyPictureComponent,
		HomeComponent,
		ContactComponent,
		TinkeringComponent,
		MainMenuComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		RouterModule.forRoot(ROUTES, { useHash: true })
	],
	providers: [
		GlitchMediatorService,
		LocalStorageService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
