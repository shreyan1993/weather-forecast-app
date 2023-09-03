import React from 'react';
import { LocationProvider } from '../../../context/locationContext';
import { Search } from '../../Organism/Search';
import { WeatherTile } from '../../Organism/WeatherTile';
import { StyledMain, StyledWeatherWrapper } from './Home.styles';

const Home: React.FC = () => {


	return (
		<LocationProvider>
			<StyledMain>
				<StyledWeatherWrapper className="weather-app-wrapper">
					<Search />
				</StyledWeatherWrapper>
				<WeatherTile />
			</StyledMain>
		</LocationProvider>
	);
};

export default Home;
