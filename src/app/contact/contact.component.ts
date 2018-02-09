import { Component, HostBinding } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";

@Component({
	selector: "bg-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements IGlitchable {
	
	@HostBinding("class")
	public state: GlitchState;

	constructor() { }
}
