import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuringMapComponent } from './turing-map.component';

describe('TuringMapComponent', () => {
  let component: TuringMapComponent;
  let fixture: ComponentFixture<TuringMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuringMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuringMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
