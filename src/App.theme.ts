import { css } from 'styled-components';
import GenericBackground from 'assets/GenericWeather.jpg';
export const breakpoints = {
	small: 640,
	medium: 768, //ipad portrait
	large: 1023, //ipad landscape
	xlarge: 1244, //1280px screen resolution minus scrollbars
	xxlarge: 1410, // 1440px screen resolution minus scrollbars
};

const theme = {
	colours: {
		primary: '#61dbfb',
		secondary: '#ec2c7e',
	},
	breakpoints,
	mediaQueries: {
		desktop: `@media screen and (min-width: ${breakpoints.large}px)`,
		xlarge: `@media screen and (min-width: ${breakpoints.xlarge}px)`,
	},
	layers: {
		header: 10,
	},
	fonts: {
		primary: 'Arial, sans-serif',
	},
};

export const themeStyles = css`
	/* Global CSS styles based on your theme */
	html,
	body,
	#root {
		scroll-behavior: smooth;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: 'Rubik', sans-serif;
		font-size: 18px;
		color: white;
		box-sizing: border-box;

		.route {
			display: flex;
			flex-direction: column;
			height: 100%;
			min-height: 100vh;

			main {
				flex: 1 0 auto;
			}

			header,
			footer {
				flex: none;
			}
		}
	}

	body {
		background-image: url(${GenericBackground});
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}

	/* Define other global styles here */
`;

export default theme;
