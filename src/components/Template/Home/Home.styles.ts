import styled from 'styled-components';
import GenericBackground from 'assets/GenericWeather.jpg'

export const StyledWeatherWrapper = styled.div`
	position: relative;
	padding-top: 20px;
`;

export const StyledMain = styled.main`
		background-image: url(${GenericBackground}); 
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
/* background: linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%)`;

// export default css`
// display: flex;
// flex-direction: column-reverse;
// width: 100%;
// padding: 20px;
// max-width: 800px;
// background-color: #F5F5F5;
// border: 1px solid #D2D2D2;
// position: relative;

// @media (min-width: 640px) {
// 	padding: 66px;
// }

// @media (min-width: 768px) {
// 	max-height: 385px;
// 	height: 100%;
// 	margin: 10px auto auto auto;
// 	flex-direction: row;
// }

// &:before {
// 	position: absolute;
// 	content: "";
// 	width: 100%;
// 	height: 4px;
// 	display: block;
// 	background: #356CCB;
// 	top: -10px;
// 	left: 0;
// 	margin-bottom: 10px;
// }

// .weather-app-wrapper {

// 	}
// }
// `;
