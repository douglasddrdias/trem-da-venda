import { render, screen } from '@testing-library/react';
import DivEnd from './DivEnd';

test('render a div', () => {
  render(<DivEnd>teste</DivEnd>);
  const divEl = screen.getByText('teste');
  expect(divEl).toBeInTheDocument();
});
