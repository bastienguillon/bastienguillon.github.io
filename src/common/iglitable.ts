export enum GlitchState {
    Glitchy = "glitchy",
    Boring = "boring"
}

export interface IGlitchable {
    state: GlitchState;
}