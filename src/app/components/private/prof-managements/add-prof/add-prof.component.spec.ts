import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfComponent } from './add-prof.component';

describe('AddProfComponent', () => {
  let component: AddProfComponent;
  let fixture: ComponentFixture<AddProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
