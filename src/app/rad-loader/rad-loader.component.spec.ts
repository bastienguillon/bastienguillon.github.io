import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadLoaderComponent } from './rad-loader.component';

describe('RadLoaderComponent', () => {
  let component: RadLoaderComponent;
  let fixture: ComponentFixture<RadLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
