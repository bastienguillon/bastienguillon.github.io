import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchyTextComponent } from './glitchy-text.component';

describe('GlitchyTextComponent', () => {
  let component: GlitchyTextComponent;
  let fixture: ComponentFixture<GlitchyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlitchyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlitchyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
