import * as React from 'react';

interface TodoItemProps {
  text: string;
}

export const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => (
  <div>{props.text}</div>
);
