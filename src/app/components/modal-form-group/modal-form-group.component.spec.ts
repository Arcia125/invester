import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormGroupComponent } from './modal-form-group.component';

describe('ModalFormGroupComponent', () => {
  let component: ModalFormGroupComponent;
  let fixture: ComponentFixture<ModalFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
