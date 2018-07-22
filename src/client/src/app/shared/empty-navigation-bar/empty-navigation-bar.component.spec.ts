import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyNavigationBarComponent } from './empty-navigation-bar.component';

describe('EmptyNavigationBarComponent', () => {
  let component: EmptyNavigationBarComponent;
  let fixture: ComponentFixture<EmptyNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
