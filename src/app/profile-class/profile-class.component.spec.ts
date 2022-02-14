import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileClassComponent } from './profile-class.component';

describe('ProfileClassComponent', () => {
  let component: ProfileClassComponent;
  let fixture: ComponentFixture<ProfileClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
