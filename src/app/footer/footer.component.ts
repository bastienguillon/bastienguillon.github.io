import { Component, HostBinding } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";
import { GlitchMediatorService } from "../glitch-mediator.service";
import { TranslateService } from "@ngx-translate/core";
import { SupportedLanguage, LocalStorageService } from "../local-storage.service";

@Component({
	selector: "bg-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements IGlitchable {

	@HostBinding("class")
	public state: GlitchState;

	public availableLanguages: SupportedLanguage[];

	constructor(
		private glitchMediator: GlitchMediatorService,
		private translateService: TranslateService,
		private localStorageService: LocalStorageService
	) {
		glitchMediator.register(this);
		this.availableLanguages = Object.keys(SupportedLanguage).map(key => SupportedLanguage[key]);
	}

	public changeLanguage(language: SupportedLanguage): void {
		this.translateService.use(language);
		this.localStorageService.CurrentLanguage = language;
	}
}
