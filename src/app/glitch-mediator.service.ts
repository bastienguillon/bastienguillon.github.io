import { Injectable } from "@angular/core";
import { GlitchState, IGlitchable } from "../common/iglitable";
import { Component } from "@angular/compiler/src/core";

@Injectable()
export class GlitchMediatorService {

	private static _listeners: IGlitchable[] = new Array<IGlitchable>();
	private static _state: GlitchState = GlitchState.Glitchy;

	public get state(): GlitchState { return GlitchMediatorService._state; }
	public set state(value: GlitchState) {
		if (value === GlitchMediatorService._state) {
			return;
		}
		GlitchMediatorService._state = value;
		for (const listener of GlitchMediatorService._listeners) {
			listener.state = value;
		}
	}

	constructor() { }

	public register(listener: IGlitchable): void {
		listener.state = GlitchMediatorService._state;
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
