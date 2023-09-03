import styled, { css } from 'styled-components';

export const StyledDiv = styled.div<{ forecast?: boolean }>`
	${props =>
		props.forecast &&
		css`
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			border-bottom: 1px solid;
			padding-bottom: 10px;
			&:last-child {
				border: none;
			}
		`};

	@media (min-width: 640px) {
		width: 25%;
		margin: 0 auto;
		display: block;
		border: none;
	}
`;

export const StyledWeatherDetailsWrapper = styled.div``;

export const StyledWeatherDescription = styled.p<{ forecast?: boolean }>`
	@media (min-width: 640px) {
		text-align: center;
		font-size: 24px;
		font-weight: 600;
	}
	text-align: ${props => (props.forecast ? 'left' : 'center')};
	font-size: ${props => (props.forecast ? '18px' : '24px')};
	font-weight: ${props => (props.forecast ? '400' : '600')};
	line-height: 1.4;
	margin-bottom: 0;
`;

export const StyledTemperature = styled.p<{ forecast?: boolean }>`
	text-align: center;
	font-size: ${props => (props.forecast ? '24px' : '48px')};
	line-height: 1.4;
	margin-bottom: 0;
	font-weight: ${props => (props.forecast ? '600' : '800')};
	margin-top: 0;
`;

export const StyledWeatherLogo = styled.img<{ forecast?: boolean }>`
	display: block;
	width: ${props => (props.forecast ? '50px' : '130px')};
	height: ${props => (props.forecast ? '50px' : '130px')};
	margin: 0 auto;
	@media (min-width: 640px) {
		width: ${props => (props.forecast ? '100px' : '130px')};
		height: ${props => (props.forecast ? '100px' : '130px')};
	}
`;

export const StyledDate = styled.p<{ forecast?: boolean }>`
	@media (min-width: 640px) {
		text-align: center;
	}
	text-align: left;
	margin: auto 0;
	font-weight: 600;
`;
