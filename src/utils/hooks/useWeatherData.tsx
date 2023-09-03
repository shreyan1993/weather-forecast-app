import { useEffect, useState } from 'react';
import { WeatherResponse } from '../../components/Molecules/WeatherInfo/WeatherInfo.types';

interface WeatherData {
	currentWeatherData: WeatherResponse | null;
	forecastWeatherData: WeatherResponse | null;
	status: string;
}

const useWeatherData = (latitudeVal: number | undefined, longitudeVal: number | undefined): WeatherData => {
	const [currentWeatherData, setCurrentWeatherData] = useState(null);
	const [forecastWeatherData, setForecastWeatherData] = useState(null);
	const [status, setStatus] = useState('');

	useEffect(() => {
		let isMounted = true;

		if (latitudeVal && longitudeVal) {
			setStatus('loading');

			const fetchCurrentWeatherData = async (): Promise<void> => {
				try {
					const responseCurrent = await fetch(
						`https://api.openweathermap.org/data/2.5/weather?lat=${latitudeVal}&lon=${longitudeVal}&appid=13ce01a858d7aa682de82049bf7803f7&units=metric`,
					);
					if (isMounted) {
						const result = await responseCurrent.json();
						setCurrentWeatherData(result);
					}
				} catch (error) {
					console.error('Error fetching current weather conditions:', error);
				}
			};

			const fetchForecastWeatherData = async (): Promise<void> => {
				try {
					const responseForecasted = await fetch(
						`https://api.openweathermap.org/data/2.5/forecast?lat=${latitudeVal}&lon=${longitudeVal}&appid=13ce01a858d7aa682de82049bf7803f7&units=metric`,
					);
					if (isMounted) {
						const result = await responseForecasted.json();
						setForecastWeatherData(result);
					}
				} catch (error) {
					console.error('Error fetching forecasted weather conditions:', error);
				}
			};

			const fetchWeatherData = async (): Promise<void> => {
				await fetchCurrentWeatherData();
				await fetchForecastWeatherData();
				if (isMounted) {
					setStatus('loaded');
				}
			};

			fetchWeatherData();

			return () => {
				isMounted = false;
			};
		}
	}, [latitudeVal, longitudeVal]);

	return { currentWeatherData, forecastWeatherData, status };
};

export default useWeatherData;
