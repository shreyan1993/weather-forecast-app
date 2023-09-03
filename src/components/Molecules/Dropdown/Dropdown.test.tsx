import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Dropdown } from './Dropdown';

const mockOptions = [
  {
    name: 'Option 1',
    local_names: { en: 'Option 1' },
    lat: 1,
    lon: 1,
    country: 'Country 1',
    state: 'State 1',
  },
  {
    name: 'Option 2',
    local_names: { en: 'Option 2' },
    lat: 2,
    lon: 2,
    country: 'Country 2',
    state: 'State 2',
  },
];

describe('Dropdown Component', () => {
  it('renders dropdown options correctly', () => {
    const onSelect = jest.fn();
    const { getByRole } = render(<Dropdown options={mockOptions} onSelect={onSelect} />);

    const dropdownContainer = getByRole('listbox');
    expect(dropdownContainer).toBeInTheDocument();

    mockOptions.forEach((option) => {
      const optionElement = getByRole('option', { name: option.name });
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('calls onSelect when an option is clicked', () => {
    const onSelect = jest.fn();
    const { getByRole } = render(<Dropdown options={mockOptions} onSelect={onSelect} />);

    const optionElement = getByRole('option', { name: 'Option 1' });
    fireEvent.click(optionElement);

    expect(onSelect).toHaveBeenCalledWith(mockOptions[0]);
  });
});
