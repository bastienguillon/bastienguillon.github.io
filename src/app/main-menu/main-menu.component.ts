import { Component, Input, HostBinding } from "@angular/core";
import { IGlitchable, GlitchState } from "../../common/iglitable";
import { GlitchMediatorService } from "../glitch-mediator.service";

@Component({
	selector: "bg-main-menu",
	templateUrl: "./main-menu.component.html",
	styleUrls: ["./main-menu.component.scss"]
})
export class MainMenuComponent implements IGlitchable {

	@HostBinding("class")
	public state: GlitchState;

	public glitchStates: typeof GlitchState = GlitchState;

	constructor(private glitchMediator: GlitchMediatorService) {
		this.glitchMediator.register(this);
	}

	public selectGlitchState = (newState: GlitchState) => this.glitchMediator.State = this.state = newState;
}
