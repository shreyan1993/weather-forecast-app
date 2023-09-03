
import styled from 'styled-components';

export const StyledHeader = styled.header`
height: 60px;
	z-index: 1111;
	display: flex;
	position: sticky;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.16);

	.logo {
		display: flex;
		align-items: center;
		padding: 0 0 0 60px;
		text-decoration: none;
		font-size: 16px;
		font-weight: bold;

		img {
			height: 40px;
		}
	}
`;