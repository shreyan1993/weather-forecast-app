import { Dashboard } from './routes/Dashboard';
import NotFound from './routes/NotFound';

const Routes = {
	Home: {
		title: 'Dashboard',
		path: '/',
		exact: true,
		component: Dashboard,
	},
	NotFound: {
		title: '404',
		path: '/404',
		exact: true,
		component: NotFound,
	},
};

export default Routes;
