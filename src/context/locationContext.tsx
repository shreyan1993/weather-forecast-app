
import React, { createContext, useContext, useState } from 'react';
import { WeatherResponse } from '../components/Molecules/WeatherInfo/WeatherInfo.types';
import { LocationData } from '../components/Organism/Search/Search.types';
import useWeatherData from '../utils/hooks/useWeatherData';
import { GlobalProps } from 'typings/GlobalTypings';


interface LocationContextTypes {
	location: LocationData | undefined;
	setLocation: (location: LocationData) => void;
	currentWeatherData: WeatherResponse | null;
	forecastWeatherData: WeatherResponse | null;
	status: string;
}

const LocationContext = createContext<LocationContextTypes>({
	location: undefined,
	setLocation: () => {},
	currentWeatherData: null ,
	forecastWeatherData: null,
	status: 'loading',
});

export const LocationProvider: React.FC<GlobalProps> = ({ children }) => {
	const [location, setLocation] = useState<LocationData | undefined>();
	const { currentWeatherData, forecastWeatherData, status } = useWeatherData(location?.lat, location?.lon);
	return (
		<LocationContext.Provider value={{ location, setLocation, currentWeatherData, forecastWeatherData, status }}>
			{children}
		</LocationContext.Provider>
	);
};

export const useLocationData = (): LocationContextTypes => {
	return useContext(LocationContext);
};
