import React from 'react';
import { LocationProvider } from '../../../context/locationContext';
import { Search } from '../../Organism/Search';
import { WeatherTile } from '../../Organism/WeatherTile';
import { StyledWeatherWrapper } from './Home.styles';

const Home: React.FC = () => {
	return (
		<LocationProvider>
			<main>
				<StyledWeatherWrapper className="weather-app-wrapper">
					<Search />
				</StyledWeatherWrapper>
				<WeatherTile />
			</main>
		</LocationProvider>
	);
};

export default Home;
