import styled from 'styled-components';

export const StyledHeader = styled.header`
	height: 47px;
	z-index: 1111;
	display: flex;
	position: sticky;
	align-items: center;
	justify-content: center;
	background: rgb(211 203 220 / 57%);
	@media (min-width: 640px) {
		justify-content: start;
		padding: 0 0 0 60px;
	}
	padding: 0 10px;
	box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.16);

	.logo {
		display: flex;
		align-items: center;
		text-decoration: none;
		font-size: 16px;
		font-weight: bold;
		@media (min-width: 640px) {
			padding: 0 0 0 60px;
		}

		img {
			border-radius: 7px;
    margin-right: 7px;
    height: 37px;
    width: 37px;
}
		}
	}
`;
