import { render, screen, fireEvent } from '@testing-library/react';
import BtnConterCarrinho from './BtnConterCarrinho';

const produto = { quantity: 5 };
test('renders a p element with text quantity of product, and two buttons ', () => {
  render(<BtnConterCarrinho produto={produto} />);
  const textEl = screen.getByText(/5/i);
  const btnMinusEl = screen.getByText(/-/i);
  const btnPlusEl = screen.getByText(/\+/i);

  expect(textEl).toBeInTheDocument();
  expect(btnMinusEl).toBeInTheDocument();
  expect(btnPlusEl).toBeInTheDocument();
});

test('calls a callback when button plus is pressed', () => {
  const callback = jest.fn();
  render(<BtnConterCarrinho onUp={callback} produto={produto} />);
  const btnPlusEl = screen.getByText(/\+/i);
  fireEvent.click(btnPlusEl);
  expect(callback).toHaveBeenCalledTimes(1);
});

test('calls a callback when button minus is pressed', () => {
  const callback = jest.fn();
  render(<BtnConterCarrinho onDown={callback} produto={produto} />);
  const btnMinusEl = screen.getByText(/-/i);
  fireEvent.click(btnMinusEl);
  expect(callback).toHaveBeenCalledTimes(1);
});
