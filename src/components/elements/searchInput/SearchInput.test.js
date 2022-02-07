import { render, screen } from '@testing-library/react';
import SeachInput from './SearchInput';

test('renders a input and button', () => {
  render(<SeachInput />);
  const inputEl = screen.getByRole('input');
  const btnEl = screen.getByRole('button');

  expect(inputEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
});
