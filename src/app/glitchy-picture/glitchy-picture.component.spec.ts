import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GlitchyPictureComponent } from "./glitchy-picture.component";

describe("GlitchyPictureComponent", () => {
	let component: GlitchyPictureComponent;
	let fixture: ComponentFixture<GlitchyPictureComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GlitchyPictureComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GlitchyPictureComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
