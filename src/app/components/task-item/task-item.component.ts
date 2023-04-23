import { Task } from 'src/app/Task';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() onDeleteEvent = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit() {}

  onDelete(task: Task) {
    this.onDeleteEvent.emit({id: task.id})
  }
}
