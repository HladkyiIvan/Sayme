import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherUserpageComponent } from './another-userpage.component';

describe('AnotherUserpageComponent', () => {
  let component: AnotherUserpageComponent;
  let fixture: ComponentFixture<AnotherUserpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherUserpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherUserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
