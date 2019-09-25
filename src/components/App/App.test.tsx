import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText('booyah! travis')).toBeInTheDocument();
});
