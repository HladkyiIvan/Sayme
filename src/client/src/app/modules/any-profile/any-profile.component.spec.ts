import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyProfileComponent } from './any-profile.component';

describe('AnyProfileComponent', () => {
  let component: AnyProfileComponent;
  let fixture: ComponentFixture<AnyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
