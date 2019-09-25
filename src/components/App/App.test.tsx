import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText('booyah! travis')).toBeInTheDocument();
});
