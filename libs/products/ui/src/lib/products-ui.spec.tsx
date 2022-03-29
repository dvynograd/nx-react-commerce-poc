import { render } from '@testing-library/react';

import ProductsUi from './products-ui';

describe('ProductsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductsUi />);
    expect(baseElement).toBeTruthy();
  });
});
