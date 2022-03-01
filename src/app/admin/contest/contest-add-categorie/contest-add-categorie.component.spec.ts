import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestAddCategorieComponent } from './contest-add-categorie.component';

describe('ContestAddCategorieComponent', () => {
  let component: ContestAddCategorieComponent;
  let fixture: ComponentFixture<ContestAddCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestAddCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestAddCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
