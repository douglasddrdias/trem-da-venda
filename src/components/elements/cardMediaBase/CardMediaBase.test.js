import { render, screen } from '@testing-library/react';
import CardMediaBase from './CardMediaBase';

test('renders a img', () => {
  render(<CardMediaBase component="img" />);
  const imageEl = screen.getByRole('img');

  expect(imageEl).toBeInTheDocument();
});
