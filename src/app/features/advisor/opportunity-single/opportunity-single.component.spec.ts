import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitySingleComponent } from './opportunity-single.component';

describe('OpportunitySingleComponent', () => {
  let component: OpportunitySingleComponent;
  let fixture: ComponentFixture<OpportunitySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
