import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { EventsGateway } from 'src/events/events.gateway';
import { DrizzleService } from 'src/drizzle/drizzle.service';

@Injectable()
export class TodosService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly eventsGateway: EventsGateway,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }

  markAsComplete(id: number) {
    this.eventsGateway.server.emit('todoCompleted', { id });
    return `This action returns a #${id} todo`;
  }
}
