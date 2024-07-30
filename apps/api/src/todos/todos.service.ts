import { Injectable } from '@nestjs/common';
import { EventsGateway } from 'src/events/events.gateway';

@Injectable()
export class TodosService {
  constructor(private readonly eventsGateway: EventsGateway) {}

  async markAsComplete(todoId: string): Promise<void> {
    // Update the todo item in the database (assume a Todo entity exists)
    // await this.todoRepository.update(todoId, { completed: true });

    // Emit the completion event to all clients
    this.eventsGateway.server.emit('todoCompleted', { id: todoId });
  }
}
