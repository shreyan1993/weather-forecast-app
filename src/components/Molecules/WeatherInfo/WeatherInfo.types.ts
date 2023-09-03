export interface WeatherResponse {
	dt: number;
    list:[],
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		sea_level: number;
		grnd_level: number;
		humidity: number;
		temp_kf: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
}

export interface WeatherDetails {
	data: WeatherResponse;
	forecast?: boolean;
}
