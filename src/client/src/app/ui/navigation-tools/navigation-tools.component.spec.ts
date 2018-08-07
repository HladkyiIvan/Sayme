import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationToolsComponent } from './navigation-tools.component';

describe('NavigationToolsComponent', () => {
  let component: NavigationToolsComponent;
  let fixture: ComponentFixture<NavigationToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
