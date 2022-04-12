import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFormEditComponent } from './phone-form-edit.component';

describe('PhoneFormEditComponent', () => {
  let component: PhoneFormEditComponent;
  let fixture: ComponentFixture<PhoneFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
