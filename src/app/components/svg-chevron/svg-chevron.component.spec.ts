import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgChevronComponent } from './svg-chevron.component';

describe('SvgChevronComponent', () => {
  let component: SvgChevronComponent;
  let fixture: ComponentFixture<SvgChevronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgChevronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgChevronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
