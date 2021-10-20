import { render } from '@testing-library/react';
import { StrongReference } from './StrongReference';

describe('Strong Reference component', () => {
  it('should use proper prefix when origin is greek', () => {
    const { getByText } = render(
      <StrongReference origin="greek">children</StrongReference>,
    );

    expect(getByText('Gchildren')).toBeInTheDocument();
  });

  it('should use proper prefix when origin is hebrew', () => {
    const { getByText } = render(
      <StrongReference origin="hebrew">children</StrongReference>,
    );

    expect(getByText('Hchildren')).toBeInTheDocument();
  });
});
