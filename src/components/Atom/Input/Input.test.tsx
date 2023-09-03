
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from './Input';

const mockInputProps = {
  fieldLabel: 'Label Text',
  type: 'text',
  id: 'input-id',
  name: 'input-name',
  placeholder: 'Enter text',
  value: '',
  onClick: jest.fn(),
  onChange: jest.fn(),
  onKeyDown: jest.fn(),
  ref: { current: null },
};

describe('Input Component', () => {
  it('renders the input field and label correctly', () => {
    const { getByLabelText } = render(<Input {...mockInputProps} />);
    expect(getByLabelText(mockInputProps.fieldLabel)).toBeInTheDocument();
  });
});
