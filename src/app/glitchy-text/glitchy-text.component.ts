import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "bg-glitchy-text",
	templateUrl: "./glitchy-text.component.html",
	styleUrls: ["./glitchy-text.component.scss"]
})
export class GlitchyTextComponent implements OnInit {

	@Input() text: string;

	constructor() { }

	ngOnInit() {
	}

}
