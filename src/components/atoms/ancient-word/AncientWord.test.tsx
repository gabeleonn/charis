import { render } from '@testing-library/react';
import { AncientWord } from './AncientWord';

describe('Ancient Word component', () => {
  it('should use proper font-family when origin is greek', () => {
    const { getByText } = render(
      <AncientWord origin="greek">children</AncientWord>,
    );

    expect(getByText('children')).toHaveStyle({
      fontFamily: 'GFS Didot',
    });
  });

  it('should use proper font-family when origin is hebrew', () => {
    const { getByText } = render(
      <AncientWord origin="hebrew">children</AncientWord>,
    );

    expect(getByText('children')).toHaveStyle({
      fontFamily: 'Noto Serif Hebrew',
    });
  });
});
