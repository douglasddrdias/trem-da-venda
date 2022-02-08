import { render, screen } from '@testing-library/react';
import ItemGridSemBorda from './ItemGridSemBorda';

test('renders a div with a grid', () => {
  render(<ItemGridSemBorda>text</ItemGridSemBorda>);
  const divEl = screen.getByText('text');

  expect(divEl).toBeInTheDocument();
});
