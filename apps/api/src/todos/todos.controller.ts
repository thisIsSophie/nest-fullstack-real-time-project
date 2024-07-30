import { Controller, Get } from '@nestjs/common';
import type { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  async findAll() {
    // return this.todosService.findAll();
    return this.todosService.test();
  }
}
