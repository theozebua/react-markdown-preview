import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

export default function Section({ children, className }: Props): JSX.Element {
	return (
		<section className={`bg-white w-full shadow p-4 rounded ${className}`}>
			{children}
		</section>
	);
}
