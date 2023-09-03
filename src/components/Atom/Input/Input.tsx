import { StyledInput } from './Input.styles';
import { InputProps } from './Input.types';

export const Input = (props: InputProps): JSX.Element => {
	return (
		<>
			{props.fieldLabel && (
				<label className="field--heading" htmlFor={props.id}>
					{props.fieldLabel}
				</label>
			)}
			<StyledInput {...props} />
		</>
	);
};
