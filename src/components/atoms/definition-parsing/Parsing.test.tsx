import { render } from '@testing-library/react';
import { DefinitionParsing } from './Parsing';

describe('Label component', () => {
  it('should render label and children', () => {
    const { getByText } = render(
      <DefinitionParsing
        origin="greek"
        parsing="test-parsing"
        wordAncient="test-ancient"
        wordTranslit="test-translit"
      />,
    );

    expect(getByText('test-parsing')).toBeInTheDocument();
    expect(getByText('test-ancient')).toBeInTheDocument();
    expect(getByText('| test-translit')).toBeInTheDocument();
  });
});
