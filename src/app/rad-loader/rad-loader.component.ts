import { Component, Input } from "@angular/core";
import { IGlitchable, GlitchState } from "../../common/iglitable";

@Component({
	selector: "bg-rad-loader",
	templateUrl: "./rad-loader.component.html",
	styleUrls: ["./rad-loader.component.scss"]
})
export class RadLoaderComponent implements IGlitchable {

	@Input() public state: GlitchState;
	@Input() color: string;
	@Input() size: string;

	public speedInSeconds: number;

	constructor() { }
}
