import { Component } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";
import { GlitchMediatorService } from "../glitch-mediator.service";

@Component({
	selector: "bg-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements IGlitchable {

	public state: GlitchState;

	constructor(private glitchMediatorService: GlitchMediatorService) {
		glitchMediatorService.register(this);
	}
}
