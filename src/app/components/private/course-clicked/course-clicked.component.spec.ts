import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClickedComponent } from './course-clicked.component';

describe('CourseClickedComponent', () => {
  let component: CourseClickedComponent;
  let fixture: ComponentFixture<CourseClickedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseClickedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseClickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
