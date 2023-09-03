import { render } from '@testing-library/react';
import { WeatherTile } from './WeatherTile';

const mockCurrentWeatherData = {
	coord: {
		lon: -0.1276,
		lat: 51.5073,
	},
	weather: [
		{
			id: 804,
			main: 'Rain',
			description: 'overcast sky',
			icon: '04d',
		},
	],
	base: 'stations',
	main: {
		temp: 26.04,
		feels_like: 26.04,
		temp_min: 24.12,
		temp_max: 27.79,
		pressure: 1026,
		humidity: 54,
	},
	visibility: 10000,
	wind: {
		speed: 3.09,
		deg: 100,
	},
	clouds: {
		all: 99,
	},
	dt: 1693755172,
	sys: {
		type: 2,
		id: 268730,
		country: 'GB',
		sunrise: 1693718147,
		sunset: 1693766681,
	},
	timezone: 3600,
	id: 2643743,
	name: 'London',
	cod: 200,
};

const mockForecastWeatherData = {
	cod: '200',
	message: 0,
	cnt: 40,
	list: [
		{
			dt: 1693764000,
			main: {
				temp: 24.89,
				feels_like: 24.98,
				temp_min: 22.7,
				temp_max: 24.89,
				pressure: 1026,
				sea_level: 1026,
				grnd_level: 1022,
				humidity: 59,
				temp_kf: 2.19,
			},
			weather: [
				{
					id: 804,
					main: 'Clouds',
					description: 'overcast clouds',
					icon: '04d',
				},
			],
			clouds: {
				all: 98,
			},
			wind: {
				speed: 2.84,
				deg: 97,
				gust: 4.25,
			},
			visibility: 10000,
			pop: 0,
			sys: {
				pod: 'd',
			},
			dt_txt: '2023-09-03 18:00:00',
		},
	],
};

jest.mock('../../../context/locationContext', () => ({
	useLocationData: () => ({
		location: {
			name: 'Test Location',
		},
		currentWeatherData: mockCurrentWeatherData,
		forecastWeatherData: mockForecastWeatherData,
		status: 'loaded',
	}),
}));

describe('WeatherTile Component', () => {
	it('renders weather information when status is loaded', () => {
		const { getByText } = render(<WeatherTile />);
		expect(getByText('Test Location')).toBeInTheDocument();
		expect(getByText('Clouds')).toBeInTheDocument();
	});
});
