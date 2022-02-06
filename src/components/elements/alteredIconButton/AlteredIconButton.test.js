import { render, screen } from '@testing-library/react';
import AlteredIconButton from './AlteredIconButton';

test('renders a button', () => {
  render(<AlteredIconButton />);
  const btnEl = screen.getByRole('button');

  expect(btnEl).toBeInTheDocument();
});
