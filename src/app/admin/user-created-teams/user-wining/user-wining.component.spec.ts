import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWiningComponent } from './user-wining.component';

describe('UserWiningComponent', () => {
  let component: UserWiningComponent;
  let fixture: ComponentFixture<UserWiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWiningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
