import React from 'react';
import { WeatherDetails } from './WeatherInfo.types';
import {
	StyledWeatherLogo,
	StyledDiv,
	StyledWeatherDescription,
	StyledTemperature,
	StyledDate,
} from './WeatherInfo.styles';

export const WeatherInfo: React.FC<WeatherDetails> = ({ data, forecast }) => {
	const formatDayOfWeek = (timestamp: number): string => {
		const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const date = new Date(timestamp * 1000);
		const dayOfWeek = daysOfWeek[date.getDay()];
		return dayOfWeek;
	};
	return (
		<StyledDiv forecast={forecast} className="weather-wrapper">
			{forecast && (
				<StyledDate forecast={forecast} className="weather--date">
					{formatDayOfWeek(data.dt)}
				</StyledDate>
			)}
			<div>
				<StyledWeatherDescription forecast={forecast} className="weather--description">
					{data.weather[0].main}
				</StyledWeatherDescription>
				<StyledWeatherLogo
					forecast={forecast}
					className="weather--icon"
					alt="weather-icon"
					src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
				/>
				<StyledTemperature forecast={forecast} className="city--temp">
					{Math.trunc(data.main.temp)}&deg;
				</StyledTemperature>
			</div>
		</StyledDiv>
	);
};
