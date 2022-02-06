import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a text ', () => {
  render(<App />);
  const linkElement = screen.getByText(/trem da venda/i);
  expect(linkElement).toBeInTheDocument();
});
