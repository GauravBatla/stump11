import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestUserTeamsComponent } from './contest-user-teams.component';

describe('ContestUserTeamsComponent', () => {
  let component: ContestUserTeamsComponent;
  let fixture: ComponentFixture<ContestUserTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestUserTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestUserTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
