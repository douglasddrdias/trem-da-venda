import { render, screen, fireEvent } from '@testing-library/react';
import CardProduto from './CardProduto';

const produto = {
  id: 1,
  title: 'title',
  price: '10',
  image: 'img',
  description: 'description',
  stats: 'category',
  rating: { rate: 3, count: 0 },
};
test('renders complete component card of product', () => {
  render(<CardProduto produto={produto} />);
  const btnEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img', {
    name: '',
  });
  const imageStarEl = screen.getByRole('img', {
    name: /star/i,
  });
  const titleProductEl = screen.getByText(produto.title);
  const priceProductEl = screen.getByText(/10/i);
  expect(btnEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(imageStarEl).toBeInTheDocument();
  expect(titleProductEl).toBeInTheDocument();
  expect(priceProductEl).toBeInTheDocument();
});

test('renders loading card product forever', () => {
  render(<CardProduto loading="true" />);
  const skeletonCardProductEl = screen.getByLabelText('cardProductSkeleton');
  expect(skeletonCardProductEl).toBeInTheDocument();
});

test('calls a callback when button in the card product is pressed', () => {
  const callback = jest.fn();
  render(<CardProduto produto={produto} onClicarEmProduto={callback} />);
  const btnEl = screen.getByRole('button');
  fireEvent.click(btnEl);
  expect(callback).toHaveBeenCalledTimes(1);
});
