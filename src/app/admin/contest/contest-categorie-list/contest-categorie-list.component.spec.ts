import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestCategorieListComponent } from './contest-categorie-list.component';

describe('ContestCategorieListComponent', () => {
  let component: ContestCategorieListComponent;
  let fixture: ComponentFixture<ContestCategorieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestCategorieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestCategorieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
