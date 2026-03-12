import { TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({ imports: [TaskListComponent] }).compileComponents();
    const fixture = TestBed.createComponent(TaskListComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
