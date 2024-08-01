import { serial, text, pgTable } from 'drizzle-orm/pg-core';

const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
});

export default { todos };
