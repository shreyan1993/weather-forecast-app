import React, { createContext, useContext, useState } from 'react';
import { LocationData } from '../components/Organism/Search/Search.types';
import useWeatherData from '../utils/hooks/useWeatherData';
import { GlobalProps } from 'typings/GlobalTypings';
import { useLocationSearch } from 'utils/hooks/useLocationSearch';
import { LocationContextTypes } from './locationContext.types';

export const LocationContext = createContext<LocationContextTypes>({
	cityName: '',
	setCityName: () => {},
	location: undefined,
	setLocation: () => {},
	searchedLocationData: [],
	currentWeatherData: null,
	forecastWeatherData: null,
	status: 'loading',
});

export const LocationProvider: React.FC<GlobalProps> = ({ children }) => {
	const [cityName, setCityName] = useState('');
	const { searchedLocationData } = useLocationSearch(cityName);
	const [location, setLocation] = useState<LocationData | undefined>();
	const { currentWeatherData, forecastWeatherData, status } = useWeatherData(location?.lat, location?.lon);
	return (
		<LocationContext.Provider
			value={{
				cityName,
				setCityName,
				location,
				setLocation,
				searchedLocationData,
				currentWeatherData,
				forecastWeatherData,
				status,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};

export const useLocationData = (): LocationContextTypes => {
	return useContext(LocationContext);
};
