import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAdminComponent } from './index.component';

describe('IndexAdminComponent', () => {
  let component: IndexAdminComponent;
  let fixture: ComponentFixture<IndexAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
