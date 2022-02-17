import { render } from '@testing-library/react';
import DivImg from './DivImg';

test('renders a divImg', () => {
  render(<DivImg />);
  const divEl = document.querySelector('.css-1hysscf');
  expect(divEl).toBeInTheDocument();
});
