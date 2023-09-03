import React from 'react';
import { useLocationData } from '../../../context/locationContext';
import { WeatherResponse } from '../../Molecules/WeatherInfo/WeatherInfo.types';
import { HeadingH1 } from '../../Atom/Heading';
import { WeatherInfo } from '../../Molecules/WeatherInfo';
import { StyledForecastWrapper } from './WeatherTile.styles';

export const WeatherTile: React.FC = () => {
	const { location, currentWeatherData, forecastWeatherData, status } = useLocationData();

	const getNext5DaysFromTimestamps = (timestamps: WeatherResponse[]): WeatherResponse[] => {
		const currentDate = new Date().getDay();
		const next5Days = [];

		for (let i = 0; i < timestamps.length; i++) {
			const timestamp = timestamps[i].dt * 1000; // Convert to milliseconds
			const date = new Date(timestamp).getDay();
			if (currentDate != date && i % 8 === 0) {
				next5Days.push(timestamps[i]);
			}
		}
		next5Days.push(timestamps[timestamps.length - 1]);
		return next5Days;
	};

	return (
		<div>
			{status === 'loading' ? <div aria-label="Please wait while data loads loading" className="spinner" /> : ''}
			{currentWeatherData && forecastWeatherData && status === 'loaded' && (
				<>
					<div>
						<HeadingH1>{location?.name}</HeadingH1>
						<WeatherInfo data={currentWeatherData} forecast={false} />
					</div>
					<StyledForecastWrapper>
						{getNext5DaysFromTimestamps(forecastWeatherData.list).map(item => (
							<WeatherInfo data={item} forecast={true} />
						))}
					</StyledForecastWrapper>
				</>
			)}
		</div>
	);
};
