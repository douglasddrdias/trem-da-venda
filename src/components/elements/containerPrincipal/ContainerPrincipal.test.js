// MuiContainer-maxWidthLg css-1gwu5ri-MuiContainer-root

import { render } from '@testing-library/react';
import ContainerPricipal from './ContainerPrincipal';

test('renders loading info product forever', () => {
  render(<ContainerPricipal />);
  const containerEl = document.querySelector('.MuiContainer-maxWidthLg ');
  expect(containerEl).toBeInTheDocument();
});
