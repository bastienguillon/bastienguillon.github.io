import { Component, Input } from "@angular/core";

@Component({
	selector: "bg-rad-loader",
	templateUrl: "./rad-loader.component.html",
	styleUrls: ["./rad-loader.component.scss"]
})
export class RadLoaderComponent {

	@Input() color: string;
	@Input() size: string;
	@Input() flavor: "smooth" | "glitchy";

	public speedInSeconds: number;

	constructor() { }
}
