import React from 'react';
import { Link } from 'react-router-dom';

import Logo from 'assets/logo.png';
import Routes from '../../../routes';
import { StyledHeader } from './Header.styles';

export const Header: React.FC = () => (
	<StyledHeader>
		<Link className="logo" to={Routes.Home.path}>
			<img src={Logo} alt="React App" />
             React Weather Widget Using Hooks
		</Link>
	</StyledHeader>
);
