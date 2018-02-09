import { Component, Input, HostBinding } from "@angular/core";
import { IGlitchable, GlitchState } from "../../common/iglitable";
import { EventEmitter } from "@angular/core/src/event_emitter";
import { GlitchMediatorService } from "../glitch-mediator.service";
import { ThrowStmt } from "@angular/compiler/src/output/output_ast";
import { TranslateService } from "@ngx-translate/core";
import { LocalStorageService, SupportedLanguage } from "../local-storage.service";

@Component({
	selector: "bg-main-menu",
	templateUrl: "./main-menu.component.html",
	styleUrls: ["./main-menu.component.scss"]
})
export class MainMenuComponent implements IGlitchable {

	@HostBinding("class")
	public state: GlitchState;

	public glitchStates: typeof GlitchState = GlitchState;

	constructor(
		private glitchMediator: GlitchMediatorService,
		private translateService: TranslateService,
		private localStorageService: LocalStorageService
	) {
		this.glitchMediator.register(this);
	}

	public selectGlitchState = (newState: GlitchState) => {
		debugger;
		this.glitchMediator.State = this.state = newState;
	}

	public changeLanguage($event): void {
		const newLanguage =
			this.translateService.currentLang === SupportedLanguage.en ? SupportedLanguage.fr : SupportedLanguage.en;
		this.translateService.use(newLanguage);
		this.localStorageService.CurrentLanguage = newLanguage;
	}
}
