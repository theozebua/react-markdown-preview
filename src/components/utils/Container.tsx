import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: String;
}

export default function Container({ children, className }: Props): JSX.Element {
	return <div className={`container mx-auto p-4 ${className}`}>{children}</div>;
}
