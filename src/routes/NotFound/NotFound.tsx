import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Routes from '../../routes';

const NotFound: React.FC<RouteComponentProps> = () => {
	return (
		<main>
			<h1>404 Not Found</h1>
			<p>The page you were looking for could not be found</p>
			<Link to={Routes.Home.path}>Return home</Link>
		</main>
	);
};

export default NotFound;
