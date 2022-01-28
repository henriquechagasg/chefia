import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallActionItemComponent } from './small-action-item.component';

describe('SmallActionItemComponent', () => {
  let component: SmallActionItemComponent;
  let fixture: ComponentFixture<SmallActionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallActionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallActionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
