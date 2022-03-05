import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteamDetailsComponent } from './iteam-details.component';

describe('IteamDetailsComponent', () => {
  let component: IteamDetailsComponent;
  let fixture: ComponentFixture<IteamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteamDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
