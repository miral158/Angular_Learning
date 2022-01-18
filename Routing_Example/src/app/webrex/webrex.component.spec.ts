import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebrexComponent } from './webrex.component';

describe('WebrexComponent', () => {
  let component: WebrexComponent;
  let fixture: ComponentFixture<WebrexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebrexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
