import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUserpageComponent } from './base-userpage.component';

describe('BaseUserpageComponent', () => {
  let component: BaseUserpageComponent;
  let fixture: ComponentFixture<BaseUserpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseUserpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseUserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
