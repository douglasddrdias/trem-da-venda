import { render, screen, fireEvent } from '@testing-library/react';
import BtnCarrinho from './BtnCarrinho';

test('renders received quantidadeProdutosCarrinho, svg and a button with a text five', () => {
  render(<BtnCarrinho quantidadeProdutosCarrinho={5} />);
  const textEl = screen.getByText(/5/i);
  const svgEl = screen.getByTestId('ShoppingCartOutlinedIcon');
  const btnEl = screen.getByRole('button');

  expect(textEl).toBeInTheDocument();
  expect(svgEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
});

test('calls a callback when btnCarrinho is pressed', () => {
  const callback = jest.fn();
  render(<BtnCarrinho onClickCarrinho={callback} />);
  const btnEl = screen.getByRole('button');
  fireEvent.click(btnEl);
  expect(callback).toHaveBeenCalledTimes(1);
});
