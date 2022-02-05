import { render, screen } from '@testing-library/react';
import TextTrem from './TextTrem';

test('render a speacial p type Trem with text', () => {
  const frase = 'Meu teste';
  render(<TextTrem>{frase}</TextTrem>);
  const meuTextoEl = screen.getByText(`${frase}`);
  expect(meuTextoEl).toBeInTheDocument();
});
