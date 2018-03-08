import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaPngComponent } from './galleria-png.component';

describe('GalleriaPngComponent', () => {
  let component: GalleriaPngComponent;
  let fixture: ComponentFixture<GalleriaPngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriaPngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriaPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
