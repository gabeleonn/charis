import { render } from '@testing-library/react';
import { Verse } from './Verse';

describe('Verse component', () => {
  it('should render both verse number and string', () => {
    const { getByText } = render(<Verse number={5}>children</Verse>);

    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('children')).toBeInTheDocument();
  });
});
