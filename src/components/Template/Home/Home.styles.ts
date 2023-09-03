import styled from 'styled-components';
import GenericBackground from 'assets/GenericWeather.jpg';

export const StyledWeatherWrapper = styled.div`
	position: relative;
	padding-top: 20px;
`;

export const StyledMain = styled.main`
	background-image: url(${GenericBackground});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
`;
