import { Component, Input, ElementRef, Renderer2, AfterViewInit, ViewChild } from "@angular/core";
import { GlitchState, IGlitchable } from "../../common/iglitable";

@Component({
	selector: "bg-glitchy-picture",
	templateUrl: "./glitchy-picture.component.html",
	styleUrls: ["./glitchy-picture.component.scss"]
})
export class GlitchyPictureComponent implements AfterViewInit, IGlitchable {

	@Input()
	public state: GlitchState = GlitchState.boring;
	@Input()
	public jitterSpeed: number = 350;
	@Input()
	public pictureUrl: string;
	@Input()
	public pictureHeight: number = 200;
	@Input()
	public pictureWidth: number = 200;

	@ViewChild("glitchyCanvas")
	private glitchyCanvas: ElementRef;

	constructor() { }

	/** Inspired by: https://codepen.io/Blummed/pen/lCjiu */
	ngAfterViewInit() {
		const canvas = this.glitchyCanvas.nativeElement as HTMLCanvasElement;
		const context = canvas.getContext("2d") as CanvasRenderingContext2D;
		const image = new Image();
		let glitchInterval: any;

		const glitchImg = () => {
			const jittersCount = this.randInt(1, 4);
			for (let i = 0; i < jittersCount; i++) {
				const x = Math.random() * this.pictureWidth;
				const y = Math.random() * this.pictureHeight;
				const spliceWidth = this.pictureWidth - x;
				const spliceHeight = this.randInt(5, this.pictureHeight / 3);
				context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
				context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
			}
		};

		const init = () => {
			clearInterval(glitchInterval);
			glitchInterval = setInterval(() => {
				this.clearCanvas(context);
				context.drawImage(image, 0, 0, this.pictureWidth, this.pictureHeight);
				if (this.state === GlitchState.glitchy) {
					setTimeout(glitchImg, this.randInt(this.pictureWidth, this.pictureHeight));
				}
			}, this.jitterSpeed);
		};

		image.src = this.pictureUrl;
		image.onload = () => init();
	}

	private randInt = (first: number, second: number): number => Math.floor(Math.random() * (second - first) + first);

	private clearCanvas = (context: CanvasRenderingContext2D) => context.clearRect(0, 0, this.pictureWidth, this.pictureHeight);
}
