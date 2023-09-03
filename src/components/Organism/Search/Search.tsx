import React, { useEffect, useRef, useState } from 'react';
import { LocationData, SearchProps } from './Search.types';
import { useLocationData } from '../../../context/locationContext';
import { Dropdown } from '../../Molecules/Dropdown';
import { Input } from '../../Atom/Input';
import { StyledDiv } from './Search.styles';

export const Search: React.FC<SearchProps> = ({ fieldLabel }) => {
	const { cityName, setCityName, searchedLocationData, setLocation } = useLocationData();
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent): void => {
			closeDropdown();
		};

		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

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
			setSelectedOptionIndex(prevIndex =>
				prevIndex < searchedLocationData.length - 1 ? prevIndex + 1 : prevIndex,
			);
		} else if (e.key === 'ArrowUp') {
			setSelectedOptionIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
		} else if (e.key === 'Enter' && selectedOptionIndex !== -1) {
			handleDropdownSelect(searchedLocationData[selectedOptionIndex]);
		} else if (e.key === 'Escape') {
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
			{isDropdownOpen && searchedLocationData.length !==0 && (
				<>
					<Dropdown options={searchedLocationData} data-testid="dropdown" onSelect={handleDropdownSelect} />
				</>
			)}
		</StyledDiv>
	);
};
