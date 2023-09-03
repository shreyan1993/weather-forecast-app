// Import necessary dependencies and the component
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional DOM matchers
import { HeadingH1 } from './Heading'; // Adjust the import path as needed

// Describe the test suite
describe('HeadingH1 Component', () => {
	// Define a test case
	it('renders the heading text correctly', () => {
		// Define the text you want to render
		const text = 'Hello, World!';

		// Render the component with the text
		const { getByText } = render(<HeadingH1>{text}</HeadingH1>);

		// Use a matcher to check if the text is in the document
		expect(getByText(text)).toBeInTheDocument();
	});
});
