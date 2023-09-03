import { StyledDropdownContainer, StyledDropdownItem } from './Dropdown.styles';
import { DropdownProps } from './Dropdown.types';

export const Dropdown = ({ options, onSelect }: DropdownProps): JSX.Element => {
	return (
		<StyledDropdownContainer role="listbox">
			{options.map(result => (
				<StyledDropdownItem key={`index-${result.lat}`} role="option" onClick={() => onSelect(result)}>
					{result?.name}
				</StyledDropdownItem>
			))}
		</StyledDropdownContainer>
	);
};
