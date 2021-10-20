import { render } from '@testing-library/react';
import { ChapterHeader } from './ChapterHeader';

describe('Verse component', () => {
  it('should render both verse number and string', () => {
    const { getByText } = render(<ChapterHeader reference="test-reference" />);

    expect(getByText('test-reference')).toBeInTheDocument();
  });
});
