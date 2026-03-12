import { TestBed } from '@angular/core/testing';
import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({ imports: [TaskFormComponent] }).compileComponents();
    const fixture = TestBed.createComponent(TaskFormComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
