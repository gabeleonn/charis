import { render } from '@testing-library/react';
import { ALink } from './ALink';

describe('ALink component', () => {
  it('should render link with proper href', () => {
    const { getByText } = render(
      <ALink href="https://test.link">children</ALink>,
    );

    expect(getByText('children')).toHaveProperty('href', 'https://test.link/');
  });
});
