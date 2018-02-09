import { Injectable } from "@angular/core";
import { GlitchState } from "../common/iglitable";

export enum SupportedLanguage {
	en = "en",
	fr = "fr"
}

@Injectable()
export class LocalStorageService {

	//
	// Language
	//
	private static readonly LANGUAGE_KEY = "language";
	public static readonly DEFAULT_LANGUAGE = SupportedLanguage.en;
	public get CurrentLanguage(): SupportedLanguage {
		return LocalStorageService.getOrSetDefault(LocalStorageService.LANGUAGE_KEY, LocalStorageService.DEFAULT_LANGUAGE, SupportedLanguage);
	}
	public set CurrentLanguage(value: SupportedLanguage) {
		localStorage.setItem(LocalStorageService.LANGUAGE_KEY, value);
	}

	//
	// Glitch state
	//
	private static readonly GLITCH_STATE_KEY = "glitch-state";
	private static readonly DEFAULT_GLITCH_STATE = GlitchState.glitchy;
	public get CurrentGlitchState(): GlitchState {
		return LocalStorageService.getOrSetDefault(LocalStorageService.GLITCH_STATE_KEY, LocalStorageService.DEFAULT_GLITCH_STATE, GlitchState);
	}
	public set CurrentGlitchState(value: GlitchState) {
		localStorage.setItem(LocalStorageService.GLITCH_STATE_KEY, value);
	}

	// Utils

	private static getOrSetDefault(key: string, defaultValue: any, type: any): any {
		const raw = localStorage.getItem(key);
		if (!(raw in type)) {
			localStorage.setItem(key, defaultValue);
			return LocalStorageService.getOrSetDefault(key, defaultValue, type);
		}
		return raw;
	}
}
