import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDocumentTableComponent } from './user-document-table.component';

describe('UserDocumentTableComponent', () => {
  let component: UserDocumentTableComponent;
  let fixture: ComponentFixture<UserDocumentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDocumentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDocumentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
