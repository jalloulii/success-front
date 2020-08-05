import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelomentComponent } from './develoment.component';

describe('DevelomentComponent', () => {
  let component: DevelomentComponent;
  let fixture: ComponentFixture<DevelomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
