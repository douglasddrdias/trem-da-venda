import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders a button', () => {
  render(<Button />);
  const btnEl = screen.getByRole('button');
  expect(btnEl).toBeInTheDocument();
});

test('renders a button white', () => {
  render(<Button branco="true" />);
  const btnEl = screen.getByRole('button');
  expect(btnEl).toBeInTheDocument();
});

test('renders a button green', () => {
  render(<Button verde="true" />);
  const btnEl = screen.getByRole('button');
  expect(btnEl).toBeInTheDocument();
});
