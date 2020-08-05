import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGraphyComponent } from './photo-graphy.component';

describe('PhotoGraphyComponent', () => {
  let component: PhotoGraphyComponent;
  let fixture: ComponentFixture<PhotoGraphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGraphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGraphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
