import { Component } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";

@Component({
	selector: "bg-tinkering",
	templateUrl: "./tinkering.component.html",
	styleUrls: ["./tinkering.component.scss"]
})
export class TinkeringComponent implements IGlitchable {

	public state: GlitchState;
	public glitchStates: typeof GlitchState = GlitchState;

	constructor() { }
}
