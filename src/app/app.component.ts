import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

import { GlitchState, IGlitchable } from "../common/iglitable";
import { GlitchMediatorService } from "./glitch-mediator.service";
import { SupportedLanguage, LocalStorageService } from "./local-storage.service"

@Component({
	selector: "bg-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements IGlitchable {

	public state: GlitchState;

	public glitchStates: typeof GlitchState = GlitchState;

	title = "app";

	constructor(
		private glitchMediator: GlitchMediatorService,
		private translateService: TranslateService,
		private localStorageService: LocalStorageService
	) {
		glitchMediator.register(this);
		translateService.setDefaultLang(LocalStorageService.DEFAULT_LANGUAGE);
		translateService.use(localStorageService.CurrentLanguage);
	}

	public toggleGlitchState($event): void {
		this.glitchMediator.State = this.state === GlitchState.boring ? GlitchState.glitchy : GlitchState.boring;
	}

	public changeLanguage($event): void {
		const newLanguage =
			this.translateService.currentLang === SupportedLanguage.en ? SupportedLanguage.fr : SupportedLanguage.en;
		this.translateService.use(newLanguage);
		this.localStorageService.CurrentLanguage = newLanguage;
	}

	public onActivate(enteringComponent: IGlitchable): void {
		// Register the entering component
		this.glitchMediator.register(enteringComponent);
	}

	public onDeactivate(leavingComponent: IGlitchable): void {
		// Remove references to the leaving component so that it can be garbage collected
		this.glitchMediator.unregister(leavingComponent);
	}
}
