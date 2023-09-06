import styled from 'styled-components';

export const StyledFooter = styled.footer`
	width: 100%;
	background-color: ${props => props.theme.colours.secondary};
	color: white;
	text-align: center;
	height: 47px;

	p {
		margin-top: 13px;
		font-size: 16px;
	}
`;
