import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	className?: string;
}

export default function Section({ children, className }: Props): JSX.Element {
	return (
		<section
			className={`w-full rounded bg-white p-4 shadow dark:bg-gray-800 ${className}`}
		>
			{children}
		</section>
	);
}
