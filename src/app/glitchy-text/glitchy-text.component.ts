import { Component, OnInit, Input } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";

@Component({
	selector: "bg-glitchy-text",
	templateUrl: "./glitchy-text.component.html",
	styleUrls: ["./glitchy-text.component.scss"]
})
export class GlitchyTextComponent implements IGlitchable {

	@Input() text: string;
	@Input() state: GlitchState;

	constructor() { }
}
