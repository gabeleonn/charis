import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputTypes } from '@/interfaces';
import { Input } from './Input';

const mockOnChange = jest.fn();

describe('Input component', () => {
  it('should render props correctly', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Input
        label="test-label"
        name="test-name"
        placeholder="test-placeholder"
        value="test-text"
        onChange={mockOnChange}
        helperText="test-helper"
        type={InputTypes.TEXT}
      />,
    );

    const inputByPlaceHolder = getByPlaceholderText('test-placeholder');
    const inputByLabel = getByLabelText('test-label');

    expect(inputByPlaceHolder).toBeInTheDocument();
    expect(inputByLabel).toBeInTheDocument();
    expect(inputByPlaceHolder).toHaveProperty('name', 'test-name');
    expect(inputByLabel).toHaveProperty('name', 'test-name');
  });

  it('should render props correctly if input', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Input
        label="test-label"
        name="test-name"
        placeholder="test-placeholder"
        value="test-text"
        onChange={mockOnChange}
        helperText="test-helper"
        type={InputTypes.TEXT}
      />,
    );

    const inputByPlaceHolder = getByPlaceholderText('test-placeholder');
    const inputByLabel = getByLabelText('test-label');

    expect(inputByPlaceHolder).toHaveProperty('type', 'text');
    expect(inputByLabel).toHaveProperty('type', 'text');
  });

  it('should render props correctly if input', () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Input
        label="test-label"
        name="test-name"
        placeholder="test-placeholder"
        value="test-text"
        onChange={mockOnChange}
        helperText="test-helper"
        type={InputTypes.TEXTAREA}
      />,
    );

    const inputByPlaceHolder = getByPlaceholderText('test-placeholder');
    const inputByLabel = getByLabelText('test-label');

    expect(inputByPlaceHolder).toHaveProperty('rows', 10);
    expect(inputByLabel).toHaveProperty('rows', 10);
  });

  it('should call onChange if input', async () => {
    const { getByPlaceholderText } = render(
      <Input
        label="test-label"
        name="test-name"
        placeholder="test-placeholder"
        value="test-text"
        onChange={mockOnChange}
        type={InputTypes.TEXT}
      />,
    );

    const inputByPlaceHolder = getByPlaceholderText('test-placeholder');

    await act(async () => {
      userEvent.type(inputByPlaceHolder, 'value');
    });

    expect(mockOnChange).toBeCalled();
  });

  it('should call onChange if textarea', async () => {
    const { getByPlaceholderText } = render(
      <Input
        label="test-label"
        name="test-name"
        placeholder="test-placeholder"
        value="test-text"
        onChange={mockOnChange}
        helperText="test-helper"
        type={InputTypes.TEXTAREA}
      />,
    );

    const inputByPlaceHolder = getByPlaceholderText('test-placeholder');

    await act(async () => {
      userEvent.type(inputByPlaceHolder, 'value');
    });

    expect(mockOnChange).toBeCalled();
  });
});
