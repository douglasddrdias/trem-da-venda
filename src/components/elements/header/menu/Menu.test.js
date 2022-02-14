import { render, screen } from '@testing-library/react';
import MenuDesktop from './Menu';

test('renders a text, input and two buttons', () => {
  render(<MenuDesktop />);
  const linkElement = screen.getByText(/trem da venda/i);
  const inputEl = screen.getByRole('input');
  const btnLoginEl = screen.getByRole('button', {
    name: /login/i,
  });
  const btnCarrinhoEl = screen.getByRole('button', {
    name: /carrinho/i,
  });
  expect(linkElement).toBeInTheDocument();
  expect(inputEl).toBeInTheDocument();
  expect(btnLoginEl).toBeInTheDocument();
  expect(btnCarrinhoEl).toBeInTheDocument();
});
