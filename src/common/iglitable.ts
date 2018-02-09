// NB: enum values case is important:
// referenced in .scss files + localStorage
export enum GlitchState {
	glitchy = "glitchy",
	boring = "boring"
}

export interface IGlitchable {
	state: GlitchState;
}
