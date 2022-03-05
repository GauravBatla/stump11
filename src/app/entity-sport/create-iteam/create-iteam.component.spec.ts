import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIteamComponent } from './create-iteam.component';

describe('CreateIteamComponent', () => {
  let component: CreateIteamComponent;
  let fixture: ComponentFixture<CreateIteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
