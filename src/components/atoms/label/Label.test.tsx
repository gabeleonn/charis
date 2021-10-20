import { render } from '@testing-library/react';
import { Label } from './Label';

describe('Label component', () => {
  it('should render label and children', () => {
    const { getByText } = render(
      <Label label="test-label" htmlFor="text-for">
        children
      </Label>,
    );

    expect(getByText('test-label')).toBeInTheDocument();
    expect(getByText('children')).toBeInTheDocument();
  });

  it('should render texthelper if any', () => {
    const { getByText } = render(
      <Label label="test-label" helperText="test-helper" htmlFor="text-for">
        children
      </Label>,
    );

    expect(getByText('test-helper')).toBeInTheDocument();
  });

  it('should render label and children', () => {
    const { getByText } = render(
      <Label label="test-label" htmlFor="text-for">
        children
      </Label>,
    );

    expect(getByText('test-label')).toHaveStyle({
      'margin-bottom': '16px',
    });
  });

  it('should render label and children', () => {
    const { getByText } = render(
      <Label label="test-label" htmlFor="text-for" helperText="test-helper">
        children
      </Label>,
    );

    expect(getByText('test-label')).not.toHaveStyle({
      'margin-bottom': '16px',
    });

    expect(getByText('test-helper')).toHaveStyle({
      'margin-bottom': '16px',
    });
  });
});
