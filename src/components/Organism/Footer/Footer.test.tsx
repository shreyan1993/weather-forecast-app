import { render } from '@testing-library/react';
import { Footer } from './Footer';
import { ThemeProvider } from 'styled-components';
import theme from 'App.theme';

test('renders footer with correct text', () => {
	const { getByText } = render(
		<ThemeProvider theme={theme}>
			<Footer />
		</ThemeProvider>,
	);
	const paragraph = getByText('Built by Shreyan Sengupta');

	expect(paragraph).toBeInTheDocument();
});
