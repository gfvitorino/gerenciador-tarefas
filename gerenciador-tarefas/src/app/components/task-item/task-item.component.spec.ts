import { TestBed } from '@angular/core/testing';
import { TaskItemComponent } from './task-item.component';

describe('TaskItemComponent', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({ imports: [TaskItemComponent] }).compileComponents();
    const fixture = TestBed.createComponent(TaskItemComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
