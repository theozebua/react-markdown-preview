import { SectionProps } from "../../@types/props";

export default function Section({
	children,
	className,
}: SectionProps): JSX.Element {
	return (
		<section
			className={`w-full rounded bg-white p-4 shadow dark:bg-gray-800 ${className}`}
		>
			{children}
		</section>
	);
}
