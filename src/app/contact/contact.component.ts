import { Component } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";

@Component({
	selector: "bg-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements IGlitchable {

	public state: GlitchState;

	constructor() { }
}
