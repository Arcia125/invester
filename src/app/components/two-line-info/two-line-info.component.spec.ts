import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLineInfoComponent } from './two-line-info.component';

describe('TwoLineInfoComponent', () => {
  let component: TwoLineInfoComponent;
  let fixture: ComponentFixture<TwoLineInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoLineInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
