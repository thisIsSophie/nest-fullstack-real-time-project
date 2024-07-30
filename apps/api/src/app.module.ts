import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [EventsModule, TodosModule],
})
export class AppModule {}
