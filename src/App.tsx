import { Footer } from 'components/Organism/Footer';
import { Header } from 'components/Organism/Header';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from 'routes';
import theme from 'App.theme';
import GlobalStyle from 'styles/GlobalStyle';

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<BrowserRouter>
			<Switch>
				{Object.values(Routes).map(route => {
					const { component: Component, exact, path } = route;
					return (
						<Route
							key={path}
							exact={exact}
							path={path}
							render={props => {
								return (
									<div className="route">
										<Header />
										<Component {...props} />
										<Footer />
									</div>
								);
							}}
						/>
					);
				})}
				{/* This will redirect to the 404 path if no above routes are matched */}
				<Redirect to={Routes.NotFound.path} />
			</Switch>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
