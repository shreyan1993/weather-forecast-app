import React, { useEffect, useRef, useState } from 'react';
import { LocationData, SearchProps } from './Search.types';
import { useLocationData } from '../../../context/locationContext';
import { Dropdown } from '../../Molecules/Dropdown';
import { Input } from '../../Atom/Input';
import { StyledDiv } from './Search.styles';

export const Search: React.FC<SearchProps> = ({ fieldLabel }) => {
	const [searchedLocationData, setSearchedLocationData] = useState([]);
	const { setLocation } = useLocationData();
	const [cityName, setCityName] = useState('');
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	// Add event listener to window for detecting clicks outside the dropdown
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent): void => {
			closeDropdown();
		};

		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	// call the location API
	useEffect(() => {
		const timer = setTimeout(() => {
			if (cityName) {
				fetch(
					`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=13ce01a858d7aa682de82049bf7803f7`,
				)
					.then(response => response.json())
					// store in state
					.then(data => setSearchedLocationData(data));
			}
		}, 200);

		return () => clearTimeout(timer);
	}, [cityName]);

	const closeDropdown = (): void => {
		setIsDropdownOpen(false);
		setSelectedOptionIndex(-1);
	};

	const handleDropdownToggle = (): void => {
		setIsDropdownOpen(!isDropdownOpen);
		if (!isDropdownOpen && inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleDropdownSelect = (value: LocationData): void => {
		setLocation(value);
		closeDropdown();
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'ArrowDown') {
			// Move down the options list
			setSelectedOptionIndex(prevIndex =>
				prevIndex < searchedLocationData.length - 1 ? prevIndex + 1 : prevIndex,
			);
		} else if (e.key === 'ArrowUp') {
			// Move up the options list
			setSelectedOptionIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
		} else if (e.key === 'Enter' && selectedOptionIndex !== -1) {
			// Select the option on Enter
			handleDropdownSelect(searchedLocationData[selectedOptionIndex]);
		} else if (e.key === 'Escape') {
			// Close the dropdown on Escape
			closeDropdown();
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setIsDropdownOpen(true);
		setCityName(e.target.value);
	};

	return (
		<StyledDiv>
			<Input
				fieldLabel={fieldLabel}
				type="text"
				id="widget-title"
				name="widget-heading"
				placeholder={'Enter to Search City'}
				value={cityName}
				onClick={handleDropdownToggle}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				ref={inputRef}
			/>
			{isDropdownOpen && searchedLocationData.length !== 0 && (
				<>
					<Dropdown options={searchedLocationData} onSelect={handleDropdownSelect} />
				</>
			)}
		</StyledDiv>
	);
};
