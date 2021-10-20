import { act, render, fireEvent } from '@testing-library/react';

const mockPush = jest.fn();
const mockOnClick = jest.fn();
const mockUseRouter = jest
  .fn()
  .mockReturnValue({ asPath: '', push: () => mockPush() });
// eslint-disable-next-line global-require
jest.mock('next/dist/client/router', () => ({
  useRouter: () => mockUseRouter(),
}));
// eslint-disable-next-line import/first
import { Button } from './Button';

describe('Button component', () => {
  afterEach(() => {
    mockPush.mockClear();
    mockOnClick.mockClear();
  });

  it('should render button with properties', () => {
    const { getByText } = render(
      <Button ariaLabel="test-aria" id="test-id">
        children
      </Button>,
    );

    const button = getByText('children');
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('id', 'test-id');
  });

  it('should push if to is defined', async () => {
    const { getByText } = render(
      <Button ariaLabel="test-aria" id="test-id" to="/test">
        children
      </Button>,
    );

    await act(async () => {
      fireEvent.click(getByText('children'));
    });

    expect(mockPush).toBeCalled();
  });

  it('should call onClick if no to', async () => {
    const { getByText } = render(
      <Button ariaLabel="test-aria" id="test-id" onClick={mockOnClick}>
        children
      </Button>,
    );

    await act(async () => {
      fireEvent.click(getByText('children'));
    });

    expect(mockOnClick).toBeCalled();
  });

  it('should call nothing if to and onChange aint defined', async () => {
    const { getByText } = render(
      <Button ariaLabel="test-aria" id="test-id">
        children
      </Button>,
    );

    await act(async () => {
      fireEvent.click(getByText('children'));
    });

    expect(mockOnClick).not.toBeCalled();
    expect(mockPush).not.toBeCalled();
  });
});
