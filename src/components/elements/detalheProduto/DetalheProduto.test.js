import { render, screen, fireEvent } from '@testing-library/react';
import DetalheProduto from './DetalheProduto';

const produto = {
  id: 1,
  title: 'title',
  price: '10',
  image: 'img',
  description: 'description',
  stats: 'category',
  rating: { rate: 3, count: 0 },
};
test('renders complete info of product', () => {
  render(<DetalheProduto produto={produto} />);
  const titleProductEl = screen.getByText(produto.title);
  const descriptionEl = screen.getByText(produto.description);
  const priceProductEl = screen.getByText(/10/i);
  const imageStarEl = screen.getByRole('img', {
    name: /star/i,
  });
  const imageEl = screen.getByRole('img', {
    name: '',
  });
  expect(titleProductEl).toBeInTheDocument();
  expect(descriptionEl).toBeInTheDocument();
  expect(imageStarEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(priceProductEl).toBeInTheDocument();
});

test('renders loading info product forever', () => {
  render(<DetalheProduto loading="true" />);
  const skeletonTextEl = screen.getByLabelText('starSkeleton');
  const skeletonRetagularEl = screen.getByLabelText('starSkeleton');
  const skeletonStarEl = screen.getByLabelText('starSkeleton');
  const skeletonImgEl = screen.getByLabelText('imgSkeleton');
  const skeletonPriceEl = screen.getByLabelText('priceSkeleton');
  const buttonPriceEl = screen.getByLabelText('buttonSkeleton');
  expect(skeletonTextEl).toBeInTheDocument();
  expect(skeletonRetagularEl).toBeInTheDocument();
  expect(skeletonStarEl).toBeInTheDocument();
  expect(skeletonImgEl).toBeInTheDocument();
  expect(skeletonPriceEl).toBeInTheDocument();
  expect(buttonPriceEl).toBeInTheDocument();
});

test('calls a callback when button in the info product is pressed', () => {
  const callback = jest.fn();
  render(<DetalheProduto produto={produto} oncomprar={callback} />);
  const btnEl = screen.getByRole('button');
  fireEvent.click(btnEl);
  expect(callback).toHaveBeenCalledTimes(1);
});
