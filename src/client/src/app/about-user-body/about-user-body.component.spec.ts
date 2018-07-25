import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUserBodyComponent } from './about-user-body.component';

describe('AboutUserBodyComponent', () => {
  let component: AboutUserBodyComponent;
  let fixture: ComponentFixture<AboutUserBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUserBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUserBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
