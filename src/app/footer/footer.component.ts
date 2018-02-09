import { Component, HostBinding } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";
import { GlitchMediatorService } from "../glitch-mediator.service";

@Component({
	selector: "bg-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements IGlitchable {

	@HostBinding("class")
	public state: GlitchState;

	constructor(
		private glitchMediator: GlitchMediatorService,
	) {
		glitchMediator.register(this);
	}
}
