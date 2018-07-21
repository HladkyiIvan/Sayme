import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationBodyComponent } from './registration-body.component';

describe('RegistrationBodyComponent', () => {
  let component: RegistrationBodyComponent;
  let fixture: ComponentFixture<RegistrationBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
