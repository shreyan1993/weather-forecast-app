import styled from 'styled-components';

export const StyledForecastWrapper = styled.div`
	@media (min-width: 640px) {
		display: flex;
		padding: 50px;
		
	}
	@media (min-width: 1244px) {
		margin: 0 auto 60px auto;
		width: 50%;
	}
	display: block;
	margin: 20px 30px 60px 30px;
	flex-direction: row;
	backdrop-filter: blur(8px);
	box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%);
	background-color: rgb(228 228 228 / 45%);
	border-radius: 11px;
	padding: 20px;
`;
