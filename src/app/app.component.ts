import { Component, OnInit } from "@angular/core";
import { GlitchState } from "../common/iglitable";

@Component({
	selector: "bg-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

	public glitchStates: typeof GlitchState = GlitchState;
	public currentGlitchState: GlitchState;

	title = "app";

	public toggleGlitchState($event): void {
		this.currentGlitchState = this.currentGlitchState === GlitchState.Boring ? GlitchState.Glitchy : GlitchState.Boring;
	}

	public ngOnInit(): void {
		this.currentGlitchState = this.glitchStates.Glitchy;
	}
}
