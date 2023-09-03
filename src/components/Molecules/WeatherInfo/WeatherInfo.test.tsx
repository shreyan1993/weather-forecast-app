import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { WeatherInfo } from './WeatherInfo';

const mockWeatherData = {
	dt: 1693753200,
	main: {
		temp: 24.44,
		feels_like: 24.45,
		temp_min: 24.44,
		temp_max: 25.55,
		pressure: 1027,
		sea_level: 1027,
		grnd_level: 1023,
		humidity: 58,
		temp_kf: -1.11,
	},
	weather: [
		{
			id: 803,
			main: 'Clouds',
			description: 'broken clouds',
			icon: '04d',
		},
	],
	clouds: {
		all: 81,
	},
	wind: {
		speed: 1.57,
		deg: 74,
		gust: 1.5,
	},
	visibility: 10000,
	pop: 0,
	sys: {
		pod: 'd',
	},
	dt_txt: '2023-09-03 15:00:00',
};

describe('WeatherInfo Component', () => {
	it('renders with forecast', () => {
		const { getByText, getByAltText } = render(<WeatherInfo data={mockWeatherData} forecast={true} />);

		expect(getByText('Monday')).toBeInTheDocument();
		expect(getByText('Clouds')).toBeInTheDocument();
		expect(getByAltText('weather-icon')).toBeInTheDocument();
	});

	it('renders without forecast', () => {
		const { getByText, getByAltText } = render(<WeatherInfo data={mockWeatherData} forecast={false} />);

		expect(getByText('Clouds')).toBeInTheDocument();
		expect(getByAltText('weather-icon')).toBeInTheDocument();
	});
});
