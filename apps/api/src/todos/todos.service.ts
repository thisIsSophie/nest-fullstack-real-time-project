import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { EventsGateway } from 'src/events/events.gateway';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import TodoEntity from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: EntityRepository<TodoEntity>,
    private readonly eventsGateway: EventsGateway,
  ) {}

  async create(todo: CreateTodoDto) {
    const newPost = await this.todoRepository.create(todo);
    return newPost;
  }

  findAll() {
    return this.todoRepository.findAll();
  }

  findOne(id: number) {
    return this.todoRepository.findOne(id);
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
