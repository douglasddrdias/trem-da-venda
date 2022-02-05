import { render, screen } from '@testing-library/react';
import Text from './Text';

test('render a p with text', () => {
  const frase = 'Meu teste';
  render(<Text>{frase}</Text>);
  const meuTextoEl = screen.getByText(`${frase}`);
  expect(meuTextoEl).toBeInTheDocument();
});
