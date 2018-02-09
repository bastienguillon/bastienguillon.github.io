import { Injectable } from "@angular/core";
import { GlitchState, IGlitchable } from "../common/iglitable";
import { Component } from "@angular/compiler/src/core";
import { LocalStorageService } from "./local-storage.service";

@Injectable()
export class GlitchMediatorService {

	private static _listeners: IGlitchable[] = new Array<IGlitchable>();

	public get State(): GlitchState { return this.localStorageService.CurrentGlitchState; }
	public set State(value: GlitchState) {
		if (value === this.State) {
			return;
		}
		this.localStorageService.CurrentGlitchState = value;
		for (const listener of GlitchMediatorService._listeners) {
			listener.state = value;
		}
	}

	constructor(private localStorageService: LocalStorageService) { }

	public register(listener: IGlitchable): void {
		listener.state = this.State;
		GlitchMediatorService._listeners.push(listener);
	}

	/**
	 * Unregister IGlitchable components when route changes
	 * otherwise components will not be garbage collected.
	 */
	public unregister(listenerToRemove: IGlitchable): void {
		const index = GlitchMediatorService._listeners.indexOf(listenerToRemove);
		if (index !== -1) {
			GlitchMediatorService._listeners.splice(index, 1);
		}
	}
}
