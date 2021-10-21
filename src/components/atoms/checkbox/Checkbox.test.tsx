import { act, render, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

const mockOnChange = jest.fn();

describe('SearchInput component', () => {
  afterEach(() => {
    mockOnChange.mockClear();
  });

  it('should render props correctly', () => {
    const { getByLabelText } = render(
      <Checkbox
        name="test-name"
        label="test-label"
        checked={false}
        onChange={mockOnChange}
      />,
    );

    const checkbox = getByLabelText('test-label');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveProperty('name', 'test-name');
  });

  it('should call onChange when clicking label', async () => {
    const { getByLabelText } = render(
      <Checkbox
        name="test-name"
        label="test-label"
        checked={false}
        onChange={mockOnChange}
      />,
    );

    const checkbox = getByLabelText('test-label');

    await act(async () => {
      fireEvent.click(checkbox);
    });

    expect(mockOnChange).toBeCalled();
  });

  it('should call onChange when clicking label', async () => {
    const { getByTestId } = render(
      <Checkbox
        name="test-name"
        label="test-label"
        checked={false}
        onChange={mockOnChange}
      />,
    );

    const iconWrapper = getByTestId('test-icon-wrapper');

    await act(async () => {
      fireEvent.click(iconWrapper);
    });

    expect(mockOnChange).toBeCalled();
  });

  it('should set icon to visible when checked is true', async () => {
    const { getByTestId } = render(
      <Checkbox
        name="test-name"
        label="test-label"
        checked
        onChange={mockOnChange}
      />,
    );

    const icon = getByTestId('test-icon');

    expect(icon).toHaveStyle({
      display: 'block',
    });
  });

  it('should set background to purple when checked is true', async () => {
    const { getByTestId } = render(
      <Checkbox
        name="test-name"
        label="test-label"
        checked
        onChange={mockOnChange}
      />,
    );

    const iconWrapper = getByTestId('test-icon-wrapper');

    expect(iconWrapper).toHaveStyle({
      background: '#7B8CDE',
    });
  });
});
