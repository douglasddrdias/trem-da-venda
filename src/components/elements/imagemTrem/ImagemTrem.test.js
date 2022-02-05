import { render, screen } from '@testing-library/react';
import ImagemTrem from './ImagemTrem';

test('render a img', () => {
  render(<ImagemTrem />);
  const minhaImgEl = screen.getByRole('img');
  expect(minhaImgEl).toBeInTheDocument();
});
