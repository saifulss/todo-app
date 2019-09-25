import React from 'react';
import { TodoItem } from '../components/TodoItem/TodoItem';

export default {
  title: 'TodoItem'
};

export const text = () => (
  <TodoItem text={'some string'}>Hello Button</TodoItem>
);
