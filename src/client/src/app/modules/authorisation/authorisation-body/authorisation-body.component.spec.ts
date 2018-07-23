import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisationBodyComponent } from './authorisation-body.component';

describe('AuthorisationBodyComponent', () => {
  let component: AuthorisationBodyComponent;
  let fixture: ComponentFixture<AuthorisationBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorisationBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
