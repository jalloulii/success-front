import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementsComponent } from './user-managements.component';

describe('UserManagementsComponent', () => {
  let component: UserManagementsComponent;
  let fixture: ComponentFixture<UserManagementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
