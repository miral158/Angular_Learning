import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabdetailComponent } from './tabdetail.component';

describe('TabdetailComponent', () => {
  let component: TabdetailComponent;
  let fixture: ComponentFixture<TabdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
