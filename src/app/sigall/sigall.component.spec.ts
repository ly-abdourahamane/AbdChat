import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigallComponent } from './sigall.component';

describe('SigallComponent', () => {
  let component: SigallComponent;
  let fixture: ComponentFixture<SigallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
