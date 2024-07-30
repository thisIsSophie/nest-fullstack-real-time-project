import { Controller, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Post(':id/complete')
  async completeTodo(@Param('id') id: string) {
    await this.todoService.markAsComplete(id);
    return { message: 'Todo marked as complete' };
  }
}
