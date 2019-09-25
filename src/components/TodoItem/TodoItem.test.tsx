import React from 'react';
import { render } from '@testing-library/react';
import { TodoItem } from './TodoItem';

it('renders a todo item correctly', () => {
  const text = 'inline it';
  const { getByText } = render(<TodoItem text={text} />);
  expect(getByText(text)).toBeInTheDocument();
});
