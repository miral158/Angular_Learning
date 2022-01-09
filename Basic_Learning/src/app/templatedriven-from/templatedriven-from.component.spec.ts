import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenFromComponent } from './templatedriven-from.component';

describe('TemplatedrivenFromComponent', () => {
  let component: TemplatedrivenFromComponent;
  let fixture: ComponentFixture<TemplatedrivenFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedrivenFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedrivenFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
