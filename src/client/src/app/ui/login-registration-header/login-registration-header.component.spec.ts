import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistrationHeaderComponent } from './login-registration-header.component';

describe('LoginRegistrationHeaderComponent', () => {
  let component: LoginRegistrationHeaderComponent;
  let fixture: ComponentFixture<LoginRegistrationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegistrationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistrationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
