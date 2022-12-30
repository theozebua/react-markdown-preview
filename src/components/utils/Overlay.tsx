interface Props {
	showModal: boolean;
}

export default function Overlay({ showModal }: Props): JSX.Element {
	return (
		<div
			className={`fixed top-0 bottom-0 left-0 right-0 z-40 bg-gray-900/50 backdrop-blur-sm ${
				showModal ? "block" : "hidden"
			}`}
		/>
	);
}
