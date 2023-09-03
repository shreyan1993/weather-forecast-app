import { H1 } from './Heading.styles';
import { HeadingProps } from './Heading.types';

export const HeadingH1 = ({ children }: HeadingProps): JSX.Element => {
	return <H1>{children}</H1>;
};
