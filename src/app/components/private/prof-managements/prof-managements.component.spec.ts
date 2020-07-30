import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfManagementsComponent } from './prof-managements.component';

describe('ProfManagementsComponent', () => {
  let component: ProfManagementsComponent;
  let fixture: ComponentFixture<ProfManagementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfManagementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
