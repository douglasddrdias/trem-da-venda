import { render, screen } from '@testing-library/react';
import MenuMobile from './MenuMobile';

test('renders a two images, two buttons and input text', () => {
  render(<MenuMobile />);
  const twoImagesEl = screen.getAllByRole('input');
  const btnLoginEl = screen.getByRole('button', {
    name: /login/i,
  });
  const btnCarrinhoEl = screen.getByRole('button', {
    name: /carrinho/i,
  });
  expect.arrayContaining(twoImagesEl);
  expect(btnLoginEl).toBeInTheDocument();
  expect(btnCarrinhoEl).toBeInTheDocument();
});
