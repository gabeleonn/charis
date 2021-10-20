import { act, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from './SearchInput';

const mockOnChange = jest.fn();
const mockHandleSearch = jest.fn();

describe('SearchInput component', () => {
  afterEach(() => {
    mockOnChange.mockClear();
    mockHandleSearch.mockClear();
  });

  it('should render props correctly', () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="test-placeholder"
        name="test-name"
        value=""
        onChange={e => mockOnChange(e)}
        handleSearch={mockHandleSearch}
      />,
    );

    const input = getByPlaceholderText('test-placeholder');

    expect(input).toBeInTheDocument();
    expect(input).toHaveProperty('name', 'test-name');
  });

  it('should render css correctly on focus', async () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="test-placeholder"
        name="test-name"
        value=""
        onChange={e => mockOnChange(e)}
        handleSearch={mockHandleSearch}
      />,
    );

    const inputWrapper = getByPlaceholderText('test-placeholder').parentElement;
    const input = getByPlaceholderText('test-placeholder');

    await act(async () => {
      fireEvent.focus(input);
    });

    expect(inputWrapper).toHaveStyle({
      border: '1px solid #7B8CDE',
    });
  });

  it('should render css correctly on blur', async () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="test-placeholder"
        name="test-name"
        value=""
        onChange={e => mockOnChange(e)}
        handleSearch={mockHandleSearch}
      />,
    );

    const inputWrapper = getByPlaceholderText('test-placeholder').parentElement;
    const input = getByPlaceholderText('test-placeholder');

    await act(async () => {
      fireEvent.blur(input);
    });

    expect(inputWrapper).toHaveStyle({
      border: '1px solid #EBEBEB',
    });
  });

  it('should call handleSearch when key down enter', async () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="test-placeholder"
        name="test-name"
        value=""
        onChange={e => mockOnChange(e)}
        handleSearch={mockHandleSearch}
      />,
    );

    const input = getByPlaceholderText('test-placeholder');

    await act(async () => {
      fireEvent.keyDown(input, { key: 'Enter' });
    });

    expect(mockHandleSearch).toBeCalled();
  });

  it('should not call handleSearch when key down is not enter', async () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="test-placeholder"
        name="test-name"
        value=""
        onChange={e => mockOnChange(e)}
        handleSearch={mockHandleSearch}
      />,
    );

    const input = getByPlaceholderText('test-placeholder');

    await act(async () => {
      fireEvent.keyDown(input, { key: 'any' });
    });

    expect(mockHandleSearch).not.toBeCalled();
  });

  it('should call onChange when typing', async () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="test-placeholder"
        name="test-name"
        value=""
        onChange={e => mockOnChange(e)}
        handleSearch={mockHandleSearch}
      />,
    );

    const input = getByPlaceholderText('test-placeholder');

    await act(async () => {
      userEvent.type(input, 'test-search');
    });

    expect(mockOnChange).toBeCalled();
  });
});
