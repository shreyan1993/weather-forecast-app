import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Search } from './Search';

jest.mock('../../../context/locationContext', () => ({
	useLocationData: () => ({
		cityName: 'InitialCityName',
		setCityName: jest.fn(),
		searchedLocationData: [{ name: 'Location1' }, { name: 'Location2' }, { name: 'Location3' }],
		setLocation: jest.fn(),
	}),
}));

describe('Search component', () => {
	it('renders the component correctly', () => {
		const { getByPlaceholderText } = render(
			<MemoryRouter>
				<Search fieldLabel="Search" />
			</MemoryRouter>,
		);

		const inputElement = getByPlaceholderText('Enter to Search City');
		expect(inputElement).toBeInTheDocument();
	});
});
