import { useContext, useEffect, useRef } from "react";
import { ModalContextType } from "../../@types/modal-context";
import { ModalContext } from "../../contexts/ModalContext";

export default function Overlay(): JSX.Element {
	const { showModal, setShowModal } = useContext(
		ModalContext
	) as ModalContextType;
	const overlay = useRef<HTMLDivElement>(null);

	useEffect(() => {
		overlay.current!.addEventListener("click", () => setShowModal(false));
		document.addEventListener(
			"keydown",
			(e) => e.key === "Escape" && setShowModal(false)
		);
	}, []);

	return (
		<div
			className={`fixed top-0 bottom-0 left-0 right-0 z-40 bg-gray-900/50 backdrop-blur-sm ${
				showModal ? "block" : "hidden"
			}`}
			ref={overlay}
		/>
	);
}
