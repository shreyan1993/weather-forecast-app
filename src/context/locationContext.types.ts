import { LocationData } from 'components/Organism/Search/Search.types';
import { WeatherResponse } from '../components/Molecules/WeatherInfo/WeatherInfo.types';

export interface LocationContextTypes {
	cityName: string;
	setCityName:(cityName: string) => void;
	location: LocationData | undefined;
	setLocation: (location: LocationData) => void;
	searchedLocationData: LocationData[];
	currentWeatherData: WeatherResponse | null;
	forecastWeatherData: WeatherResponse | null;
	status: string;
}