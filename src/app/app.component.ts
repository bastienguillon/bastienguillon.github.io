import { Component, OnInit } from "@angular/core";
import { GlitchState, IGlitchable } from "../common/iglitable";
import { GlitchMediatorService } from "./glitch-mediator.service";

@Component({
	selector: "bg-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements IGlitchable {

	public state: GlitchState;

	public glitchStates: typeof GlitchState = GlitchState;

	title = "app";

	constructor(private glitchMediator: GlitchMediatorService) {
		glitchMediator.register(this);
	}

	public toggleGlitchState($event): void {
		this.glitchMediator.state = this.state === GlitchState.Boring ? GlitchState.Glitchy : GlitchState.Boring;
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