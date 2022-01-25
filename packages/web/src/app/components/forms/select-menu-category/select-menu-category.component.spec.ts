import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMenuCategoryComponent } from './select-menu-category.component';

describe('SelectMenuCategoryComponent', () => {
  let component: SelectMenuCategoryComponent;
  let fixture: ComponentFixture<SelectMenuCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMenuCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
