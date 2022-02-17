import { render, screen } from '@testing-library/react';
import ComplementoProduto from './ComplementoProduto';

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
  render(<ComplementoProduto produto={produto} />);
  const titleProductEl = screen.getByText(produto.title);
  const descriptionEl = screen.getByText(produto.description);
  expect(titleProductEl).toBeInTheDocument();
  expect(descriptionEl).toBeInTheDocument();
});

test('renders loading info product forever', () => {
  render(<ComplementoProduto loading="true" />);
  const skeletonTextEl = screen.getByLabelText('titleSkeleton');
  const skeletonRetagularEl = screen.getByLabelText('describeSkeleton');
  expect(skeletonRetagularEl).toBeInTheDocument();
  expect(skeletonTextEl).toBeInTheDocument();
});
