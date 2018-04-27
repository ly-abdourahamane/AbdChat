import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOnionComponent } from './display-onion.component';

describe('DisplayOnionComponent', () => {
  let component: DisplayOnionComponent;
  let fixture: ComponentFixture<DisplayOnionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOnionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
