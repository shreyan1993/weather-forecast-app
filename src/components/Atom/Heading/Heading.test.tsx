import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HeadingH1 } from './Heading';

describe('HeadingH1 Component', () => {
	it('renders the heading text correctly', () => {
		const text = 'Some String';
		const { getByText } = render(<HeadingH1>{text}</HeadingH1>);
		expect(getByText(text)).toBeInTheDocument();
	});
});
