import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

test('renders header with correct text and logo', () => {
	const { getByText, getByAltText } = render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>,
	);

	const logoImage = getByAltText('React App');
	const textElement = getByText('Weather Dashboard for Coates Group');

	expect(logoImage).toBeInTheDocument();
	expect(textElement).toBeInTheDocument();
});
