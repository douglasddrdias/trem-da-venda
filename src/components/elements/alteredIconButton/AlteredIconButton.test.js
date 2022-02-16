import { render, screen, fireEvent } from '@testing-library/react';
import AlteredIconButton from './AlteredIconButton';

test('renders a button', () => {
  render(<AlteredIconButton />);
  const btnEl = screen.getByRole('button');

  expect(btnEl).toBeInTheDocument();
});

test('calls a callback when button is pressed', () => {
  const callback = jest.fn();
  render(<AlteredIconButton onUpdate={callback} />);
  const btnEl = screen.getByRole('button');
  fireEvent.click(btnEl);
  expect(callback).toHaveBeenCalledTimes(1);
});
