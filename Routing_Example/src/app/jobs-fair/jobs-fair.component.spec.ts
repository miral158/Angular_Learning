import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFairComponent } from './jobs-fair.component';

describe('JobsFairComponent', () => {
  let component: JobsFairComponent;
  let fixture: ComponentFixture<JobsFairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsFairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
