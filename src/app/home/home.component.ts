import { Component, HostBinding } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";

@Component({
	selector: "bg-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements IGlitchable {

	@HostBinding("class")
	public state: GlitchState;

	constructor() { }
}
