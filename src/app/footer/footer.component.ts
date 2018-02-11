import { Component, HostBinding } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";
import { GlitchMediatorService } from "../glitch-mediator.service";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { SupportedLanguage, LocalStorageService, SupportedLanguagesInfo, LanguagesInfo } from "../local-storage.service";

@Component({
	selector: "bg-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements IGlitchable {

	@HostBinding("class")
	public state: GlitchState;

	public currentLanguageCode: SupportedLanguage;
	public availableLanguages: SupportedLanguagesInfo[];

	constructor(
		private glitchMediator: GlitchMediatorService,
		private translateService: TranslateService,
		private localStorageService: LocalStorageService
	) {
		glitchMediator.register(this);
		this.availableLanguages = LanguagesInfo;
		this.currentLanguageCode = SupportedLanguage[translateService.currentLang];
		translateService.onLangChange.subscribe((event: LangChangeEvent) => {
			this.currentLanguageCode = SupportedLanguage[event.lang];
		});
	}

	public changeLanguage(language: SupportedLanguage): void {
		this.translateService.use(language);
		this.localStorageService.CurrentLanguage = language;
	}
}
