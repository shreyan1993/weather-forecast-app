export interface LocationData {
	name: string;
	local_names: Record<string, string>;
	lat: number;
	lon: number;
	country: string;
	state: string;
}

export interface SearchProps {
	fieldLabel?: string;
	onSelect?: ({}: LocationData) => void;
}
