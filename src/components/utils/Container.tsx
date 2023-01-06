import { ContainerProps } from "../../@types/props";

export default function Container({
	children,
	className,
}: ContainerProps): JSX.Element {
	return (
		<div className={`container mx-auto p-4 transition ${className}`}>
			{children}
		</div>
	);
}
