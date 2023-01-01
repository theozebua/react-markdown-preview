import { LegacyRef } from "react";

interface Props {
	showModal: boolean;
	refProp: LegacyRef<HTMLDivElement>;
}

export default function Overlay({ showModal, refProp }: Props): JSX.Element {
	return (
		<div
			className={`fixed top-0 bottom-0 left-0 right-0 z-40 bg-gray-900/50 backdrop-blur-sm ${
				showModal ? "block" : "hidden"
			}`}
			ref={refProp}
		/>
	);
}
