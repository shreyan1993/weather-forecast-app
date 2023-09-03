import { LocationData } from "../../Organism/Search/Search.types";


export interface DropdownProps {
	options: LocationData[];
	onSelect: (option:LocationData) => void;
}
